---
title: Components
---

There are six different components that make up the Chewy Stack's architecture: projects, environments, providers, infrastructure, services, and source. 

:::note
Most Chewy Stack users will not have to interact with these components directly. You will mostly deal with [source](#source) components, which is where you write your code.
:::

## Project {#project}
A component that manages the overarching structure, configuration, and metadata of your project. Importantly, it holds an ID which is used to manage resources outside the project directory.

## Environment {#environment}
A component which defines a deployment environment (i.e. qa, staging, prod). A different encryption key is generated per environment and component to manage secret environment variables. These are stored outside the project directory.

## Provider {#provider}
A component that holds the necessary information to deploy to an infastructure provider like DigitalOcean, Vercel, AWS, etc.

## Infrastructure {#infrastructure}
A configurable component that provisions infrastructure within a provider. Infrastructure components take care of provisioning servers, etc.

## Service {#service}
A configurable component that deploys a service to provisioned infrastructure. _These are not services that Chewy Stack users write themselves_, rather they include things like Ory Kratos (authentication server), Hasura, and others.

## Source {#source}
A component that is both configurable _and_ written by Chewy Stack users. These components are where you will actually build your app. The source components include server-side components to build GraphQL APIs as well as client side components to build web and mobile clients.

