"use strict";(self.webpackChunkchewy_stack=self.webpackChunkchewy_stack||[]).push([[831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=m(n),h=r,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(u,i(i({ref:t},l),{},{components:n})):o.createElement(u,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const a={title:"Appsmith Migrations"},i=void 0,p={unversionedId:"components/appsmith/appsmith",id:"components/appsmith/appsmith",title:"Appsmith Migrations",description:"Appsmith",source:"@site/docs/components/appsmith/appsmith.md",sourceDirName:"components/appsmith",slug:"/components/appsmith/",permalink:"/docs/components/appsmith/",draft:!1,tags:[],version:"current",frontMatter:{title:"Appsmith Migrations"}},s={},m=[{value:"Appsmith",id:"appsmith",level:2},{value:"Migrations",id:"migrations",level:2}],l={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"appsmith"},"Appsmith"),(0,r.kt)("p",null,"Appsmith is a framework to build admin panels, CRUD apps and workflows.\nAppsmith is an open-source tool that is free to use.\nIt can be used to build admin panel where user can access data from multiple sources including databases like MySql , Postgres , Redshift and even APIs.  "),(0,r.kt)("h2",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"Appsmith does not provide the functionality to migrate the data and project configuration from one machine to another.\nBut, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodbdump")," to dump data from one project and ",(0,r.kt)("inlineCode",{parentName:"p"},"mongorestore")," to the another one.\nThis method does not go well with Appsmith as it looses some information when restoring data to the target machine.\nIt works when we drop the database from the target machine and then restore the database from source machine.\nThis is a risky move, so it is only for the first time we move to the production from development or from one machine to\nthe another.\nAlso, moving dump directory from one project to another is not an appropriate way."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Documentation will be updated if and when there is a new way to apply safe migrations"),"."),(0,r.kt)("p",null,"Following are the steps.\nFirst, dump the database to a folder in a project we will be migrating from.\nTo do so, first create a folder inside data directory in the appsmith project. Update the volumes list\nby adding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"`- ./data/export:/export\n")),(0,r.kt)("p",null,"in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file's ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," service. Restart the container.\nRun ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec -it <container_name_for_mongo> bash")," then run ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodump")," command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/export/appsmith-mongo-dump\n')),(0,r.kt)("p",null,"It will create the dump directory in export directory.\nNow, we will prep the target appsmith project for restoring the data.\nGet into mongo db shell by running\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec -it <container_name_for_mongo> bash"),"\nand then run the next command to start the process of dropping database ",(0,r.kt)("inlineCode",{parentName:"p"},"appsmith"),".  Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo -u <username>  -p password"),"\nthen see if appsmith is in databases list by running ",(0,r.kt)("inlineCode",{parentName:"p"},"show dbs")," and if it is present , run ",(0,r.kt)("inlineCode",{parentName:"p"},"use appsmith")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"db.dropDatabase()"),".\nThis will drop the database and now we can start restoring of database. Run the following command after making store that appsmith project has directory with a backed up database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mongorestore --drop /export/appsmith-mongo-dump/appsmith -d appsmith --uri=mongodb://<rootUser>:<rootPassword>@localhost/appsmith\n")),(0,r.kt)("p",null,"After completing the above steps, replace the content of the file named ",(0,r.kt)("inlineCode",{parentName:"p"},"encryption.env")," with the content from the same file in a source appsmith project.\nNow restart the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," or using ",(0,r.kt)("inlineCode",{parentName:"p"},"chewy-cli")," built in commands for docker operations,\nand you will see all the applications and organizations from the source project."))}c.isMDXComponent=!0}}]);