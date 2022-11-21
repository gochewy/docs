---
title: Components
slug: /concepts/components
---

There are six different components that make up the Chewy Stack's architecture:

1.  **Project**: A component that manages the overarching structure, configuration, and metadata of your project. Importantly, it holds an ID which is used to manage resources outside the project directory.
2.  **Environment**:  A component which defines a deployment environment (i.e. qa, staging, prod). A different encryption key is generated per environment and component to manage secret environment variables. These are stored outside the project directory.
3.  **Provider**: A component that holds the necessary information to deploy to an infastructure provider like DigitalOcean, Vercel, AWS, etc.
4.  **Infrastructure**: A configurable component that provisions infrastructure within a provider. Infrastructure components take care of provisioning servers, etc.
5.  **Service**: A configurable component that deploys a service to provisioned infrastructure. _These are not services that Chewy Stack users write themselves_, rather they include things like Ory Kratos (authentication server), Postgres (database), and others.
6.  **Source**: A component that is both configurable _and_ written by Chewy Stack users.

Most Chewy Stack users will not have to interact with infrastructure components, at least to start: when you setup a project the Chewy Stack CLI will prompt you to use a template which will help you setup your provider, service, and source components and will setup the right infrastructure components under the hood.

## Provider

A provider is the only component that doesn't have any dependencies. Essentially you can think of a provider as a set of credentials. For that reason, you will interact with these primarily through the Chewy Stack CLI:

```bash
$ chewy providers ls
do-production
do-staging
do-dev
```

## Infrastructure

## Service

## Source
