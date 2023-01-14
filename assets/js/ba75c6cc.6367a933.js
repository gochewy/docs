"use strict";(self.webpackChunkchewy_stack=self.webpackChunkchewy_stack||[]).push([[506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Hasura"},s=void 0,i={unversionedId:"components/hasura",id:"components/hasura",title:"Hasura",description:"Why Hasura?",source:"@site/docs/components/hasura.md",sourceDirName:"components",slug:"/components/hasura",permalink:"/docs/components/hasura",draft:!1,tags:[],version:"current",frontMatter:{title:"Hasura"}},l={},u=[{value:"Why Hasura?",id:"why-hasura",level:2},{value:"Hasura Actions",id:"hasura-actions",level:2},{value:"Hasura Events",id:"hasura-events",level:2},{value:"Setting up event trigger",id:"setting-up-event-trigger",level:3},{value:"Hasura Remote Schema",id:"hasura-remote-schema",level:2},{value:"Setting up remote schema",id:"setting-up-remote-schema",level:3},{value:"Why using Remote Schemas",id:"why-using-remote-schemas",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-hasura"},"Why Hasura?"),(0,r.kt)("p",null,"We use Hasura to Auto-generate GraphQL APIs for our data in Chewy Stack. Hasura Create reusable APIs\nfrom databases within minutes with centralized authentication, authorization, and data security\ndown to the row and column level. A graphical interface provides user with options to view, query or manage\ndata. It lets you create new Tables, Actions, Event handlers etc. Hasura Console provides GraphQL playground\nto easily create ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptions"),"."),(0,r.kt)("h2",{id:"hasura-actions"},"Hasura Actions"),(0,r.kt)("p",null,"Actions are a way to extend Hasura\u2019s schema with custom business logic using custom queries\nand mutations. Actions can be added to Hasura to handle various use cases such as data validation,\ndata enrichment from external sources and any other complex business logic.\nSee the diagram below from Hasura Docs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hasura actions!",src:n(3582).Z,width:"701",height:"414"})),(0,r.kt)("p",null,"Actions can be simply created from Hasura console .\nFollow the instruction ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/actions/index.html"},"here")," to\nlearn more about actions and how to create Actions for your need.\nin hasura console , use code generator to start quickly with the handler depending on the\nprogram language you are using.\nBasic action definition for action is as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"extend type Query {\n  addNumbers(a: Int!, b: Int!): Sum\n}\ntype Sum {\n  sum : Int\n} // type for the output\n")),(0,r.kt)("p",null,"when creating the action, we need to point hasura action to the api endpoint for example ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"),(0,r.kt)("br",{parentName:"p"}),"\n","app running in docker container and having handler at ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/api/addNumbers")," will have endpoint "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://host.docker.internal:3000/api/addNumbers\n")),(0,r.kt)("p",null,"Following is how api function in Next.JS's ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/api/addNumbers.ts"),"\nresponds to the action from hasura"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NextApiRequest, NextApiResponse } from 'next';\n\nexport default async function addUserByEmail(req: NextApiRequest, resp: NextApiResponse) {\n  const { a, b } = req.body.input;\n\n  const sum = a+b;\n  return resp.json({\n    sum\n  })\n}\n")),(0,r.kt)("p",null,"This is just a basic example for Hasura Actions,\nwe can use Actions to implement complex business logics too. "),(0,r.kt)("h2",{id:"hasura-events"},"Hasura Events"),(0,r.kt)("p",null,"Hasura can be used to create event triggers on tables in the Postgres database.\nEvent triggers reliably capture events on specified tables and invoke webhooks to carry out any custom\nlogic. When there any insert, update or delete operation on data tables,\nhasura can trigger an event that we can use to make api requests about the update and\nperform number of operations.  See the below diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hasura Events!",src:n(9472).Z,width:"1516",height:"368"})),(0,r.kt)("p",null,"We are going to use an example of updating meilisearch whenever there is new update happening on tables.\nMeilisearch is search engine that we can use to perform search on our data.\nWe have to add documents to meilisearch manually. It can be a difficult task to update and insert\ndocuments manually every time we have  a new data. We can do it using Hasura event triggers.\nFor eg, when we insert new row in a database table, we can use Hasura events to send an POST api\nrequest to meilisearch to insert a new document and same for an update and delete operations.\nRead more about event triggers ",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/event-triggers/index.html"},"here"),"."),(0,r.kt)("h3",{id:"setting-up-event-trigger"},"Setting up event trigger"),(0,r.kt)("p",null,"Event triggers can be created using the Hasura console, CLI or metadata APIs.\nFew things needs to be setup to create new event trigger. Hasura console is the best and easy way\nto create new event trigger."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger Name"),": A unique name for event trigger."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schema/Table"),": The postgres schema and table name on which the event trigger needs to be created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trigger Operations"),": The table operation on which the event trigger will be invoked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Webhook URL"),":  The HTTP(s) URL which will be called with the event payload on configured operation.\nMust be a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," handler. This URL can be entered manually or can be picked up from an environment\nvariable (",(0,r.kt)("em",{parentName:"p"},"the environment variable needs to be set before using it for this configuration"),").\nFor our case, we are hitting the endpoint on our NestJS server, and we can have a handler that will\ninsert, update or delete the documents in meilisearch by using the payload from hasura event trigger ,\nWebhook url may look like following if we are running our services on local docker container. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://host.docker.internal:<port_for_nest_server>/<root_path>/<handler_name> \n")),(0,r.kt)("p",null,"Hasura event trigger will send the payload containing the operation name, old data from a table,\nnew data and headers if there are any. "),(0,r.kt)("h2",{id:"hasura-remote-schema"},"Hasura Remote Schema"),(0,r.kt)("p",null,"Hasura has the ability to merge remote GraphQL schemas and provide a unified GraphQL API.\nThink of it like automated schema stitching. All you need to do is build your own GraphQL\nservice and then provide the HTTP endpoint to Hasura. Your GraphQL service can\nbe written in any language or framework. A remote schema can help us combine APIs from different\nservices into single Hasura GraphQL endpoint.\nBelow is the diagram from Hasura Documentation that shows the working flow of Hasura Remote Schema\n",(0,r.kt)("img",{alt:"Remote Schema!",src:n(7421).Z,width:"1574",height:"320"})),(0,r.kt)("h3",{id:"setting-up-remote-schema"},"Setting up remote schema"),(0,r.kt)("p",null,"You can follow the simple instructions here to see how to stitch two schemas\n",(0,r.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/graphql/core/remote-schemas/adding-schema.html"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Setting up the schema is very easy and does not require too much of a configuration. After adding remote\nschema successfully, you will be able to see queries in a Hasura Console\nand perform all the operations with appropriate privileges. "),(0,r.kt)("h3",{id:"why-using-remote-schemas"},"Why using Remote Schemas"),(0,r.kt)("p",null,"When we have more than one GraphQL servers running for our Project, we have same number of GraphQL endpoints\nand will need to query on data with different clients or APIs. By stitching schemas together we can use one api\nendpoint to do all our data operations. For eg, say we have a project with Client-Side Web Application,\nMobile app and a backend running using Node.js or NestJS. Our client side applications have Hasura\nGraphQL Engine running on top of postgres database and backend is running its own GraphQL server.\nIf you want to perform a data operation on backend GraphQL server, you need to hit different Graphql\nendpoint other than the one you already have so with more GraphQL servers, more clients to connect it\nto GraphQL endpoints. Having Remote schemas stitched together, we only need one endpoint and single\nclient to perform all our queries."))}p.isMDXComponent=!0},9472:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hasura-events-f115d37b577ca9e21b6462624c733390.png"},7421:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hasura-remote-schema-4c83d01047ea121520290224196cbd71.png"},3582:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hasura-072429c38840be9e60f5ceba1bd06702.png"}}]);