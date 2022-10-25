---
title: Introduction
slug: /introduction
---

Welcome to the Chewy Stack! 🐆😊 

In this document we'll cover the following:

1. [What is the Chewy Stack?](#what-is-the-chewy-stack)
2. [Can the Chewy Stack help me?](#can-the-chewy-stack-help-me)
3. [Why should I choose the Chewy Stack?](#why-should-i-choose-the-chewy-stack)
4. [Give me a sense of how the Chewy Stack works.](#give-me-a-sense-of-how-the-chewy-stack-works)

The idea is to help you determine if the Chewy Stack is a good fit for you and why you might want to choose the Chewy Stack over other comparable tools. We believe the Chewy Stack can help a wide variety of developers to get projects off the ground, but we acknowledge that it's not going to be everyone's cup of tea. ☕️ 

So let's go ahead and figure out if it's right for *you*.


## What is the Chewy Stack?

_*The Chewy Stack is a [deep stack framework](./philosophy/deep-stack-framework.md) which aims to get developer from zero to scalable product faster than anything else out there*_

If you've made it here, you've probably come across other stacks like [LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)), [MERN](https://www.mongodb.com/mern-stack), or [MEAN](https://www.mongodb.com/mean-stack). You've probably also come across frameworks like [Django](https://www.djangoproject.com/), [Rails](https://rubyonrails.org/), or [Laravel](https://laravel.com/). You may also have come across "Backend as a Service" products like [Supabase](https://supabase.com/), [AppWrite](https://appwrite.io/), or [Parse](https://parseplatform.org/). 

Chewy is a bit like the stacks, in that it combines existing open source technologies. It's like the frameworks, in that it provides a structure to address high level concerns from data management all the way to rendering a frontend. It's like a "Backend as a Service" in that the tooling it provides out of the box makes it _really easy_ to define, organize, and access data. These are the things that make Chewy really different:

1. ### The Chewy Stack uses a micro-service architecture
The Chewy Stack aims to provide the advantages of microservices, while maintaining the simplicity of a monolith. [Read more](./philosophy/microservices.md)

2. ### We're making up a new word. We're calling the Chewy Stack a "*deep stack framework*." 
Full-stack frameworks provide structure to your application, but don't do much around deployment. A "deep stack framework" is one in which the infrastructure is explicitly *part* of the framework. [Read more](./philosophy/deep-stack-framework.md)


## Can the Chewy Stack help me?

In short, if you're building a new web or mobile app... probably!

Part of our mission is to make complex systems simple to manage, and to make the Chewy Stack accessible for developers of all levels. For that reason, we're making certain tradeoffs, which won't make sense for everyone. That being said, if you like TypeScript, GraphQL, and React, and you like building products fast, the Chewy Stack is probably for you.

One other thing: we want to make the Chewy Stack _flexible and extensible_. So if you like Kubernetes and managing infrastructure, we hope the Chewy Stack will provide a solid base for you to build some really cool systems.


## Why should I choose the Chewy Stack over the alternatives?

You should choose the Chewy Stack if you fit the following criteria:

1. You want an opinionated framework so you can start building, rather than choosing components.
2. You like (or ideally love 🧡) TypeScript, React, and GraphQL.
3. You want to be able to easily deploy to your own cloud provider without building a bunch of tooling.


## Give me a sense of how the Chewy Stack works.

Ok, this is roughly what the workflow looks like from zero servers and zero code, to production-ready application running in your own cloud.

```shell
# This gives you a graphql api, auth, and Next.js app all hooked up.
chewy-cli init --template minimal-web

# This starts everything in development mode so you can start building.
chewy-cli dev start

### ... build something awesome ...

# This creates a new environment to deploy to.
chewy-cli create environment --name production --domain mycoolproduct.io

# This connects a DigitalOcean account to the production environment.
chewy-cli create provider digitalocean --environment production --token <YOUR_DO_TOKEN>

# This provisions infrastructure (databases, kubernetes cluster, etc.), builds everything, and deploys everything.
chewy-cli deploy --environment production
```

At this point, as long as your name servers are properly configured, you would have a fully functional app, ready at `app.mycoolproduct.io`. It would have certs configured and would autoscale (to some extent!)
