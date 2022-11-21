---
title: Microservices
slug: /concepts/microservices
---

We've built products using existing frameworks designed around monolithic stacks and honestly? We love them. But we've also felt the pain of splitting them up as a product grows. Building a monolith is definitely easier in many ways when you're getting started, but it can add friction when a product's requirements become more complex as it grows.

We've often found that it makes more sense to build on top of a specialized services than building them up from scratch, and especially tying them to the rest of the application. The Chewy Stack aims to provide the advantages of microservices, while maintaining the developer-experience simplicity of a monolith: the stack includes pre-configured existing tools/frameworks to write your own frontend/backend code, and our tooling manages a few additional open source servers for things like auth, and more. It also includes the necessary tooling to build and deploy every service to your own infrastructure.