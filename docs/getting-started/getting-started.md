---
title: Getting Started with Chewy Stack
slug: /getting-started/getting-started
---

## Step 1: Installing CLI

If you haven't already, install `chewy-cli` to start with Chewy Stack. This CLI tool helps to install Chewy Stack project with custom options and also to manage it later.
CLI tool can help configure the project, start and stop docker containers and also helps you to deploy your project.

```shell
npm install -g @gochewy/chewy-cli
```
or if you are using `Yarn`

```shell
yarn global add @gochewy/chewy-cli
```
You can start with Chewy Stack using one of the three options available
```shell
chewy-cli install all
or
chewy-cli install minimal
or
chewy-cli install custom
```
To install all modules from Chewy stack, Run

```shell
chewy-cli install all
```
If you don't want to install all modules then use `custom` argument and answer Yes or No according to your needs.

Congratulations! You've successfully created your first Chewy Stack project.
