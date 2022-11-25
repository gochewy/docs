---
title: Deep Stack Framework
---

Many of the stacks we've used in the past, like Django, Rails, Laravel, etc. are referred to as "full-stack" frameworks: they give you what you need to organize your backend, while also providing the tooling to render a web frontend. The thing we found missing in those frameworks is they leave it up to the developer to figure out how they're going to deploy. Some of these frameworks can be deployed pretty easily to Heroku (or similar alternatives), but they usually take some platform-dependent configuration that the developer has to figure out. 

With the Chewy Stack, we're designing things so every component in the stack can be easily deployed to your infra without having to think about how to do it. We're starting with Digital Ocean, but will be expanding to other providers as well. For example, Next.js is a core components of the stack and we believe it should be easy to deploy it to Vercel, even if other parts of the stack live in DigitalOcean or elsewhere. The Chewy Stack makes sure all of this is easy to handle.