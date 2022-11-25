---
title: Keycloak
---

## Why Keycloak?
Keycloak is an Open Source Identity and Access Management solution for modern Applications and Services.
It can be used to add authentication to our services without worrying about all the setup authentication may need.
Keycloak server can be deployed using Docker which makes it easy to integrate with other services we use in Chewy Stack.
First, get up and running with Keycloak server by following the instructions [here](https://www.keycloak.org/getting-started/getting-started-docker) .
There are lots of libraries available to integrate Keycloak with our service depending on the programming language or technology it uses.
## React Native (Expo)
Instructions here are for React Native apps built using Expo managed workflow. 
The libraries used for getting authentication urls and doing all the tasks related to authentication flow are from Expo team.
We will be using expo-auth-session library to interact with keycloak server. There are few Authentication flows to follow , 
more on this [here](https://auth0.com/docs/flows) , but we will be following the Standard Code flow or Authorization Code flow with PKCE.  
Let's import the following
```javascript
import {
exchangeCodeAsync,
makeRedirectUri,
ResponseType,
useAuthRequest,
useAutoDiscovery,
} from 'expo-auth-session';
```
first step in authentication with keycloak from the app is to get the authentication URLs from the keyclaok server that contains the endpoint where expo will start the authentication process by sending the GET api call with all the information in query params.  To get the the document use
```javascript
const discovery = useAutoDiscovery(
'http://<keycloak-domain>/auth/realms/<Realm-name>');
```
If you are running Keycloak server locally at port number `9000` and created a realm named `Sample` the argument will look something like this
```javascript
'http://localhost:9000/auth/realms/Sample'
```
This `discovery` variable will now contain all the endpoints `expo-auth-session` needs to perform authentication 
related tasks.
Now we will get the `code` or `authorization_code` from  keycloak server , which will be used to further get `accessToken` , `idToken`,  and `refreshToken`
Now we need `redirectUri` , where after authentication session , it will redirect back to our app.
```javascript
const redirectUri = makeRedirectUri({
native: 'myApp://redirect',
useProxy,
});
```
`myApp` is a scheme that can be added in `app.json` file.  
Define `requestOptions` object to send auth request
```javascript
const authRequestOptions: AuthRequestConfig = {
    usePKCE: true,
    responseType: ResponseType.Code,
    clientId: 'sample-client',
    redirectUri,
    prompt: Prompt.Login,
    scopes: ['openid', 'profile', 'email', 'offline_access'],
    state,
    extraParams: {
      audience: 'http://localhost:3000',
      access_type: 'offline',
    },
  };
```

`AuthRequest` will initialize the auth request and `authRequest.promptAsync()` will provide us with a `code`
and other information. 
```javascript
const authRequest = new AuthRequest(authRequestOptions);
    const authorizeResult = await authRequest.promptAsync(
      { authorizationEndpoint: discovery?.authorizationEndpoint },
      {
        useProxy: true,
      },
    );
    const response = await exchangeCodeAsync(
      {
        code: (authorizeResult as any)?.params?.code,
        clientId: 'sample-client',
        redirectUri,
        extraParams: {
          code_verifier: authRequest.codeVerifier as string,
        },
      },
      { tokenEndpoint: discovery?.tokenEndpoint },
    );
```
Now we have everything we need to get tokens from Keycloak. `response` above contains tokens we need.
We are setting `usePKCE:true` in request options,
because we are using `PKCE` to improve security of our authorization process.

## Web Client

