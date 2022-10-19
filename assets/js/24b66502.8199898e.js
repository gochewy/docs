"use strict";(self.webpackChunkchewy_stack=self.webpackChunkchewy_stack||[]).push([[147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,g=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Postgres migrations"},o=void 0,s={unversionedId:"pg-diff-migrations",id:"pg-diff-migrations",title:"Postgres migrations",description:"pg-diff Library",source:"@site/docs/pg-diff-migrations.md",sourceDirName:".",slug:"/pg-diff-migrations",permalink:"/docs/pg-diff-migrations",draft:!1,tags:[],version:"current",frontMatter:{title:"Postgres migrations"}},p={},l=[{value:"<code>pg-diff</code> Library",id:"pg-diff-library",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pg-diff-library"},(0,r.kt)("inlineCode",{parentName:"h2"},"pg-diff")," Library"),(0,r.kt)("p",null,"In any project that involves saving files and information in a database requires some mechanism\nto migrate tables or data as most of the time teams have development environment where tables\nare created and then code is deployed to the production environment. Database in production\nneeds to know about the new tables created to hold new information after code change.\nAll the changes required to be reflected on target database  are managed by database migrations."),(0,r.kt)("p",null,"Our project has a service named ",(0,r.kt)("inlineCode",{parentName:"p"},"Directus"),", that we can use for content management.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Directus")," can work with Postgres database to save information about users, activities,\nfiles and sessions. We have other services too, that use Postgres database to save information\nlike Hasura GraphQL engine. Hasura comes with inbuilt migration feature that creates and applies\nmigrations for all the changes happening in the database, but Directus has no such\nfunctionality to create migrations for a database. "),(0,r.kt)("p",null,"We use library named ",(0,r.kt)("inlineCode",{parentName:"p"},"Pg-Diff-Cli")," to create and apply migrations,\nThis library has its own problems too.\nSo, we have forked the library and made some changes to make it work according to our needs.\nWe use this library\nas Docker Image and run it as a container.  It is available at Docker Hub page for\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ephemerecreative/pg-diff"},"Ephemere Creative"),".\nCreate container using the latest available image.\nFor example, "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"migrations:\n    image: ephemerecreative/pg-diff:v0.0.6\n    volumes:\n      - ./content/pg-diff-config.json:/app/pg-diff-config.json\n      - ./content/migrations:/app/migrations \n")),(0,r.kt)("p",null,"When running the docker container, it recognizes two different commands, ",(0,r.kt)("inlineCode",{parentName:"p"},"create-migrations"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"run-migrations")," . First command can create migrations on source machine by comparing the source\ndatabase with a temporary database. For example something like\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose run --rm image_name create-migrations"),". Second command, ",(0,r.kt)("inlineCode",{parentName:"p"},"run-migrations"),"\napplies migrations on target database. We need to make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"pg-diff-config.json"),"\nfile is properly defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "development": {\n    "sourceClient": { //source database properties\n      "host": "host_address",\n      "port": 5432, //or other port number if any\n      "database": "postgres",\n      "user": "user",\n      "password": "password_here",\n      "applicationName": "pg-diff-cli"\n    },\n    "targetClient": { //target database properties\n      "host": "host_address",\n      "port": 5432,\n      "database": "temporary_database_name",\n      "user": "postgres",\n      "password": "password",\n      "applicationName": "pg-diff-cli"\n    },\n    "compareOptions": {\n      "author": "Swarn",\n      "outputDirectory": "migrations",\n      "getAuthorFromGit": false,\n      "schemaCompare": {\n        "namespaces": ["public"],\n        "dropMissingTable": true,\n        "dropMissingView": false,\n        "dropMissingFunction": false,\n        "dropMissingAggregate": false,\n        "roles": []\n      },\n      "dataCompare": {\n        "enable": true, //should be false if not comparing data\n        "tables": [\n          {\n            "tableName": "table1",\n            "tableSchema": "public",\n            "tableKeyFields": ["id"]\n          },\n          ...more tables\n        ]\n      }\n    },\n    "migrationOptions": {\n      "patchesDirectory": "migrations",\n      "historyTableName": "migration",\n      "historyTableSchema": "public"\n    }\n  }\n')),(0,r.kt)("p",null,"Few things  to remember in terms of configuration is to define ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"targetClient"),"\nsection before creating migration is to name the temporary database that does not exist already.\n",(0,r.kt)("inlineCode",{parentName:"p"},"sourceClient")," section of the configuration file is the database we would like to generate\nmigrations from.\nData can also be exported from one database to the another one by\nsetting the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataCompare")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nand then providing the array of the tables we want to export data from. In our case of ",(0,r.kt)("inlineCode",{parentName:"p"},"Directus"),",\nthat will be all the Directus tables."),(0,r.kt)("p",null,"Configuration file can have multiple instance of configuration based on the scenario.\nRight now , ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," is where we add database information about source database and\nname and ports for a temporary database.\n",(0,r.kt)("inlineCode",{parentName:"p"},"local")," is when we apply migrations and define database properties there.\nMigrations files are generated and saved in migrations directory.",(0,r.kt)("br",{parentName:"p"}),"\n","When ",(0,r.kt)("inlineCode",{parentName:"p"},"run-migrations")," is run , it will check for the patch files in the migration directory,\nLibrary keeps track of all the applied migrations in ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations")," table in a database."))}d.isMDXComponent=!0}}]);