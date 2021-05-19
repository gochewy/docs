---
title: What is chewy.json file in a project
---

## Configuration Information about Project

This file stores the information about the project like which modules are enabled and which modules are disabled. 
This file is needed to configure the project in a way that it only allows dependencies between services if these are enabled.
Different features of the project depends on other modules like authorization in web client and mobile application depends on keycloak server. 
If Keycloak server is not enabled then authorization will be turned off and project finds this information in `chewy.json` file
It also contains the `url` to the respective `github` repositories for all modules.
```json
{
  "projectName": "Chewy", // name of the project or directory
  "modules": {
    "admin": {
      "enabled": true, // enabled or disabled
      "gitRepo": "https://github.com/gochewy/admin.git" // github repo
    },
    .....
  }
}

```
Project name is used for creating further configurations for individual modules like creating `realm` name in Keycloak server.
