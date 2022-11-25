"use strict";(self.webpackChunkchewy_stack=self.webpackChunkchewy_stack||[]).push([[364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Keycloak"},i=void 0,l={unversionedId:"components/keycloak",id:"components/keycloak",title:"Keycloak",description:"Why Keycloak?",source:"@site/docs/components/keycloak.md",sourceDirName:"components",slug:"/components/keycloak",permalink:"/docs/components/keycloak",draft:!1,tags:[],version:"current",frontMatter:{title:"Keycloak"}},s={},c=[{value:"Why Keycloak?",id:"why-keycloak",level:2},{value:"React Native (Expo)",id:"react-native-expo",level:2},{value:"Web Client",id:"web-client",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-keycloak"},"Why Keycloak?"),(0,r.kt)("p",null,"Keycloak is an Open Source Identity and Access Management solution for modern Applications and Services.\nIt can be used to add authentication to our services without worrying about all the setup authentication may need.\nKeycloak server can be deployed using Docker which makes it easy to integrate with other services we use in Chewy Stack.\nFirst, get up and running with Keycloak server by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/getting-started/getting-started-docker"},"here")," .\nThere are lots of libraries available to integrate Keycloak with our service depending on the programming language or technology it uses."),(0,r.kt)("h2",{id:"react-native-expo"},"React Native (Expo)"),(0,r.kt)("p",null,"Instructions here are for React Native apps built using Expo managed workflow.\nThe libraries used for getting authentication urls and doing all the tasks related to authentication flow are from Expo team.\nWe will be using expo-auth-session library to interact with keycloak server. There are few Authentication flows to follow ,\nmore on this ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/flows"},"here")," , but we will be following the Standard Code flow or Authorization Code flow with PKCE.",(0,r.kt)("br",{parentName:"p"}),"\n","Let's import the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\nexchangeCodeAsync,\nmakeRedirectUri,\nResponseType,\nuseAuthRequest,\nuseAutoDiscovery,\n} from 'expo-auth-session';\n")),(0,r.kt)("p",null,"first step in authentication with keycloak from the app is to get the authentication URLs from the keyclaok server that contains the endpoint where expo will start the authentication process by sending the GET api call with all the information in query params.  To get the the document use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const discovery = useAutoDiscovery(\n'http://<keycloak-domain>/auth/realms/<Realm-name>');\n")),(0,r.kt)("p",null,"If you are running Keycloak server locally at port number ",(0,r.kt)("inlineCode",{parentName:"p"},"9000")," and created a realm named ",(0,r.kt)("inlineCode",{parentName:"p"},"Sample")," the argument will look something like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"'http://localhost:9000/auth/realms/Sample'\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"discovery")," variable will now contain all the endpoints ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-auth-session")," needs to perform authentication\nrelated tasks.\nNow we will get the ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization_code")," from  keycloak server , which will be used to further get ",(0,r.kt)("inlineCode",{parentName:"p"},"accessToken")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"idToken"),",  and ",(0,r.kt)("inlineCode",{parentName:"p"},"refreshToken"),"\nNow we need ",(0,r.kt)("inlineCode",{parentName:"p"},"redirectUri")," , where after authentication session , it will redirect back to our app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const redirectUri = makeRedirectUri({\nnative: 'myApp://redirect',\nuseProxy,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"myApp")," is a scheme that can be added in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," file.",(0,r.kt)("br",{parentName:"p"}),"\n","Define ",(0,r.kt)("inlineCode",{parentName:"p"},"requestOptions")," object to send auth request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const authRequestOptions: AuthRequestConfig = {\n    usePKCE: true,\n    responseType: ResponseType.Code,\n    clientId: 'sample-client',\n    redirectUri,\n    prompt: Prompt.Login,\n    scopes: ['openid', 'profile', 'email', 'offline_access'],\n    state,\n    extraParams: {\n      audience: 'http://localhost:3000',\n      access_type: 'offline',\n    },\n  };\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AuthRequest")," will initialize the auth request and ",(0,r.kt)("inlineCode",{parentName:"p"},"authRequest.promptAsync()")," will provide us with a ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"\nand other information. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const authRequest = new AuthRequest(authRequestOptions);\n    const authorizeResult = await authRequest.promptAsync(\n      { authorizationEndpoint: discovery?.authorizationEndpoint },\n      {\n        useProxy: true,\n      },\n    );\n    const response = await exchangeCodeAsync(\n      {\n        code: (authorizeResult as any)?.params?.code,\n        clientId: 'sample-client',\n        redirectUri,\n        extraParams: {\n          code_verifier: authRequest.codeVerifier as string,\n        },\n      },\n      { tokenEndpoint: discovery?.tokenEndpoint },\n    );\n")),(0,r.kt)("p",null,"Now we have everything we need to get tokens from Keycloak. ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," above contains tokens we need.\nWe are setting ",(0,r.kt)("inlineCode",{parentName:"p"},"usePKCE:true")," in request options,\nbecause we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"PKCE")," to improve security of our authorization process."),(0,r.kt)("h2",{id:"web-client"},"Web Client"))}u.isMDXComponent=!0}}]);