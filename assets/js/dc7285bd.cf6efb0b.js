"use strict";(self.webpackChunkchewy_stack=self.webpackChunkchewy_stack||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Meilisearch"},l=void 0,o={unversionedId:"components/meilisearch",id:"components/meilisearch",title:"Meilisearch",description:"Meilisearch is open source, fast search engine that can be used with our projects.",source:"@site/docs/components/meilisearch.md",sourceDirName:"components",slug:"/components/meilisearch",permalink:"/docs/components/meilisearch",draft:!1,tags:[],version:"current",frontMatter:{title:"Meilisearch"}},s={},c=[{value:"Setting Up Server",id:"setting-up-server",level:2},{value:"Creating the client",id:"creating-the-client",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Meilisearch is open source, fast search engine that can be used with our projects.\nThis guide is going to explain using Meilisearch with ",(0,a.kt)("inlineCode",{parentName:"p"},"NestJS")," backend project,\nwhich can serve Web and Expo App with search results for queries through GraphQL",(0,a.kt)("br",{parentName:"p"}),"\n","endpoints and Hasura. The whole integration of meilisearch is as following"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set Up meilisearch server."),(0,a.kt)("li",{parentName:"ol"},"Set up client for meilisearch in NestJS backend"),(0,a.kt)("li",{parentName:"ol"},"Setup client to query, update, insert and delete documents from meilisearch database"),(0,a.kt)("li",{parentName:"ol"},"Set Hasura actions to query the search from NestJS api."),(0,a.kt)("li",{parentName:"ol"},"Use query (Hasura Queries) to fetch data by providing search query as a variable."),(0,a.kt)("li",{parentName:"ol"},"Use Hasura events to insert, update and delete entries from Meilisearch")),(0,a.kt)("h2",{id:"setting-up-server"},"Setting Up Server"),(0,a.kt)("p",null,"We will be setting up Meilisearch server using Docker(why not!!!).\nUsing Docker it is easy to have Meilisearch server up and running along with all our other services.\nIn Docker compose file add the following, "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"search:\n    image: getmeili/meilisearch\n    container_name: meili\n    restart: always\n    volumes:\n      - meilisearch_data:/data.ms\n    environment:\n      MEILI_MASTER_KEY: <any-string-as-master-key>\n    ports:\n      - 7700:7700\n")),(0,a.kt)("p",null,"and add ",(0,a.kt)("inlineCode",{parentName:"p"},"meilisearch_data")," in volumes section of docker file "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n  ......\n  meilisearch_data:\n")),(0,a.kt)("p",null,"When we run docker-compose up , meilisearch will be available at  ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7700/"),"\nThe next thing is to create ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," in meilisearch. Index is like a table where we store all our\nrecords as a document. Documents are basic building blocks of meilisearch data.",(0,a.kt)("br",{parentName:"p"}),"\n","We can create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," using curl, but recommended is Postman to set up indexes and check updates on meilisearch.\nTo create ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," using Postman, do a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request on endpoint  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://localhost:7700/indexes\n")),(0,a.kt)("p",null,"in body (json format) add following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uid": "todos",\n  "primaryKey": "id"\n}\n')),(0,a.kt)("p",null,"Remember! if ",(0,a.kt)("inlineCode",{parentName:"p"},"MEILI_MASTER_KEY")," is set in Docker configuration, you need it to create index or perform queries.\nSet ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Meili-API-Key")," with the value of master key , or get public or private keys from a server using\n",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request on"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"http://localhost:7700/keys\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uid")," is to tell meilisearch what the name of index is going to be.\nAll documents have a primary key, which is a mandatory ",(0,a.kt)("em",{parentName:"p"},"field"),". This field is composed of a\nprimary key ",(0,a.kt)("em",{parentName:"p"},"attribute")," name and a unique value. All documents in a given index share the same\nprimary key attribute but a different unique value. Primary can be any unique value in all the documents.\nIt can be user id for an index containing all the users as a document. "),(0,a.kt)("h2",{id:"creating-the-client"},"Creating the client"),(0,a.kt)("p",null,"Our services can interact with meilisearch server through api calls or using ",(0,a.kt)("inlineCode",{parentName:"p"},"meilisearch"),"\nJavaScript library. We will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," package called ",(0,a.kt)("inlineCode",{parentName:"p"},"meilisearch"),"  .\ninstall it using ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NestJS")," backend directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add meilisearch\n")),(0,a.kt)("p",null,"Now create a new file in your directory, where we will initialize meilisearch client.\nIt should look like the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { MeiliSearch } from 'meilisearch';\nconst client = new MeiliSearch({\n  host: 'http://localhost:7700/',\n  apiKey: '<public key here that we get from http://localhost:7700/keys>',\n});\n\nexport default client;\n")),(0,a.kt)("p",null,"We can do search using this client as shown below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const searchResponse = await client.index('todos').search(query, {\n      filters: `userId = <userId>`,\n      attributesToHighlight: ['title'],\n    });\n")),(0,a.kt)("p",null,"In the code above, todos is the index we are making our queries on. ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," is the search term we\nare sending to the server. ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," are used to filter results from the search hits we get.\nIt can be simple string, or we can also use arithmetic relations to filter out the results.\nBelow is complex query using filters where we only want Batman movies released after\nthe 18 of March 1995, and directed by either Tim Burton or Christopher Nolan,\nthen you would use this filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'filters: \'release_date > 795484800 AND (director = "Tim Burton" OR director = "Christopher Nolan")\'\n')),(0,a.kt)("p",null,"More options that can be passed along the query string can be found in the official documentation\nof meilisearch ",(0,a.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/search_parameters.html"},"here"),".\nAll the results returned from the search can be found in a response at ",(0,a.kt)("inlineCode",{parentName:"p"},"searchResponse.hits")," and we can use these results as we like."))}u.isMDXComponent=!0}}]);