---
title: Meilisearch
---

Meilisearch is open source, fast search engine that can be used with our projects. 
This guide is going to explain using Meilisearch with `NestJS` backend project, 
which can serve Web and Expo App with search results for queries through GraphQL  
endpoints and Hasura. The whole integration of meilisearch is as following
1. Set Up meilisearch server.
2. Set up client for meilisearch in NestJS backend
3. Setup client to query, update, insert and delete documents from meilisearch database
4. Set Hasura actions to query the search from NestJS api.
5. Use query (Hasura Queries) to fetch data by providing search query as a variable.
6. Use Hasura events to insert, update and delete entries from Meilisearch

## Setting Up Server

We will be setting up Meilisearch server using Docker(why not!!!).
Using Docker it is easy to have Meilisearch server up and running along with all our other services. 
In Docker compose file add the following, 

```yaml
search:
    image: getmeili/meilisearch
    container_name: meili
    restart: always
    volumes:
      - meilisearch_data:/data.ms
    environment:
      MEILI_MASTER_KEY: <any-string-as-master-key>
    ports:
      - 7700:7700
```
and add `meilisearch_data` in volumes section of docker file 

```yaml
volumes:
  ......
  meilisearch_data:
```
When we run docker-compose up , meilisearch will be available at  `http://localhost:7700/`
The next thing is to create `index` in meilisearch. Index is like a table where we store all our 
records as a document. Documents are basic building blocks of meilisearch data.   
We can create an `index` using curl, but recommended is Postman to set up indexes and check updates on meilisearch.
To create `index` using Postman, do a `POST` request on endpoint  
```shell
http://localhost:7700/indexes
```
in body (json format) add following
```json
{
  "uid": "todos",
  "primaryKey": "id"
}
```
Remember! if `MEILI_MASTER_KEY` is set in Docker configuration, you need it to create index or perform queries. 
Set `X-Meili-API-Key` with the value of master key , or get public or private keys from a server using 
`GET` request on

```shell
http://localhost:7700/keys
```
`uid` is to tell meilisearch what the name of index is going to be. 
All documents have a primary key, which is a mandatory *field*. This field is composed of a 
primary key *attribute* name and a unique value. All documents in a given index share the same 
primary key attribute but a different unique value. Primary can be any unique value in all the documents. 
It can be user id for an index containing all the users as a document. 

## Creating the client

Our services can interact with meilisearch server through api calls or using `meilisearch`
JavaScript library. We will be using `npm` package called `meilisearch`  . 
install it using `yarn` in `NestJS` backend directory called `server`. 
```shell
yarn add meilisearch
```
Now create a new file in your directory, where we will initialize meilisearch client. 
It should look like the following

```javascript
import { MeiliSearch } from 'meilisearch';
const client = new MeiliSearch({
  host: 'http://localhost:7700/',
  apiKey: '<public key here that we get from http://localhost:7700/keys>',
});

export default client;
```

We can do search using this client as shown below

```javascript
const searchResponse = await client.index('todos').search(query, {
      filters: `userId = <userId>`,
      attributesToHighlight: ['title'],
    });
```
In the code above, todos is the index we are making our queries on. `query` is the search term we
are sending to the server. `filters` are used to filter results from the search hits we get. 
It can be simple string, or we can also use arithmetic relations to filter out the results. 
Below is complex query using filters where we only want Batman movies released after 
the 18 of March 1995, and directed by either Tim Burton or Christopher Nolan, 
then you would use this filter

```javascript
filters: 'release_date > 795484800 AND (director = "Tim Burton" OR director = "Christopher Nolan")'
```
More options that can be passed along the query string can be found in the official documentation 
of meilisearch [here](https://docs.meilisearch.com/reference/features/search_parameters.html).
All the results returned from the search can be found in a response at `searchResponse.hits` and we can use these results as we like.
