---
title: Hasura
---

## Why Hasura?

We use Hasura to Auto-generate GraphQL APIs for our data in Chewy Stack. Hasura Create reusable APIs 
from databases within minutes with centralized authentication, authorization, and data security 
down to the row and column level. A graphical interface provides user with options to view, query or manage 
data. It lets you create new Tables, Actions, Event handlers etc. Hasura Console provides GraphQL playground
to easily create `queries` , `mutations` and `subscriptions`.

## Hasura Actions
Actions are a way to extend Hasura’s schema with custom business logic using custom queries
and mutations. Actions can be added to Hasura to handle various use cases such as data validation,
data enrichment from external sources and any other complex business logic.
See the diagram below from Hasura Docs

![Hasura actions!](/img/hasura.png)

Actions can be simply created from Hasura console .
Follow the instruction [here](https://hasura.io/docs/latest/graphql/core/actions/index.html) to 
learn more about actions and how to create Actions for your need.
in hasura console , use code generator to start quickly with the handler depending on the 
program language you are using.
Basic action definition for action is as follows: 

```shell
extend type Query {
  addNumbers(a: Int!, b: Int!): Sum
}
type Sum {
  sum : Int
} // type for the output
```
when creating the action, we need to point hasura action to the api endpoint for example `Next`  
app running in docker container and having handler at `pages/api/addNumbers` will have endpoint 
```shell
http://host.docker.internal:3000/api/addNumbers
```
Following is how api function in Next.JS's `pages/api/addNumbers.ts` 
responds to the action from hasura
```javascript
import { NextApiRequest, NextApiResponse } from 'next';

export default async function addUserByEmail(req: NextApiRequest, resp: NextApiResponse) {
  const { a, b } = req.body.input;

  const sum = a+b;
  return resp.json({
    sum
  })
}
```
This is just a basic example for Hasura Actions, 
we can use Actions to implement complex business logics too. 

## Hasura Events

Hasura can be used to create event triggers on tables in the Postgres database. 
Event triggers reliably capture events on specified tables and invoke webhooks to carry out any custom
logic. When there any insert, update or delete operation on data tables, 
hasura can trigger an event that we can use to make api requests about the update and 
perform number of operations.  See the below diagram:

![Hasura Events!](/img/hasura-events.png)

We are going to use an example of updating meilisearch whenever there is new update happening on tables. 
Meilisearch is search engine that we can use to perform search on our data. 
We have to add documents to meilisearch manually. It can be a difficult task to update and insert 
documents manually every time we have  a new data. We can do it using Hasura event triggers.
For eg, when we insert new row in a database table, we can use Hasura events to send an POST api 
request to meilisearch to insert a new document and same for an update and delete operations. 
Read more about event triggers [here](https://hasura.io/docs/latest/graphql/core/event-triggers/index.html).

### Setting up event trigger

Event triggers can be created using the Hasura console, CLI or metadata APIs. 
Few things needs to be setup to create new event trigger. Hasura console is the best and easy way 
to create new event trigger.

**Trigger Name**: A unique name for event trigger.

**Schema/Table**: The postgres schema and table name on which the event trigger needs to be created.

**Trigger Operations**: The table operation on which the event trigger will be invoked.

**Webhook URL**:  The HTTP(s) URL which will be called with the event payload on configured operation.
Must be a `POST` handler. This URL can be entered manually or can be picked up from an environment 
variable (*the environment variable needs to be set before using it for this configuration*). 
For our case, we are hitting the endpoint on our NestJS server, and we can have a handler that will 
insert, update or delete the documents in meilisearch by using the payload from hasura event trigger , 
Webhook url may look like following if we are running our services on local docker container. 
```shell
http://host.docker.internal:<port_for_nest_server>/<root_path>/<handler_name> 
```
Hasura event trigger will send the payload containing the operation name, old data from a table, 
new data and headers if there are any. 

## Hasura Remote Schema
Hasura has the ability to merge remote GraphQL schemas and provide a unified GraphQL API. 
Think of it like automated schema stitching. All you need to do is build your own GraphQL 
service and then provide the HTTP endpoint to Hasura. Your GraphQL service can 
be written in any language or framework. A remote schema can help us combine APIs from different 
services into single Hasura GraphQL endpoint.
Below is the diagram from Hasura Documentation that shows the working flow of Hasura Remote Schema
![Remote Schema!](/img/hasura-remote-schema.png)

### Setting up remote schema

You can follow the simple instructions here to see how to stitch two schemas
[here](https://hasura.io/docs/latest/graphql/core/remote-schemas/adding-schema.html).  
Setting up the schema is very easy and does not require too much of a configuration. After adding remote 
schema successfully, you will be able to see queries in a Hasura Console 
and perform all the operations with appropriate privileges. 

### Why using Remote Schemas

When we have more than one GraphQL servers running for our Project, we have same number of GraphQL endpoints 
and will need to query on data with different clients or APIs. By stitching schemas together we can use one api 
endpoint to do all our data operations. For eg, say we have a project with Client-Side Web Application, 
Mobile app and a backend running using Node.js or NestJS. Our client side applications have Hasura 
GraphQL Engine running on top of postgres database and backend is running its own GraphQL server. 
If you want to perform a data operation on backend GraphQL server, you need to hit different Graphql 
endpoint other than the one you already have so with more GraphQL servers, more clients to connect it 
to GraphQL endpoints. Having Remote schemas stitched together, we only need one endpoint and single 
client to perform all our queries. 
