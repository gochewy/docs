---
title: Postgres migrations
---
## `pg-diff` Library 

In any project that involves saving files and information in a database requires some mechanism 
to migrate tables or data as most of the time teams have development environment where tables 
are created and then code is deployed to the production environment. Database in production 
needs to know about the new tables created to hold new information after code change. 
All the changes required to be reflected on target database  are managed by database migrations.

Our project has a service named `Directus`, that we can use for content management. 
`Directus` can work with Postgres database to save information about users, activities, 
files and sessions. We have other services too, that use Postgres database to save information 
like Hasura GraphQL engine. Hasura comes with inbuilt migration feature that creates and applies
migrations for all the changes happening in the database, but Directus has no such 
functionality to create migrations for a database. 

We use library named `Pg-Diff-Cli` to create and apply migrations, 
This library has its own problems too. 
So, we have forked the library and made some changes to make it work according to our needs. 
We use this library 
as Docker Image and run it as a container.  It is available at Docker Hub page for 
[Ephemere Creative](https://hub.docker.com/r/ephemerecreative/pg-diff). 
Create container using the latest available image.
For example, 
```yaml
migrations:
    image: ephemerecreative/pg-diff:v0.0.6
    volumes:
      - ./content/pg-diff-config.json:/app/pg-diff-config.json
      - ./content/migrations:/app/migrations 
```
When running the docker container, it recognizes two different commands, `create-migrations`
and `run-migrations` . First command can create migrations on source machine by comparing the source 
database with a temporary database. For example something like 
`docker-compose run --rm image_name create-migrations`. Second command, `run-migrations`
applies migrations on target database. We need to make sure that `pg-diff-config.json`
file is properly defined.

```json
{
  "development": {
    "sourceClient": { //source database properties
      "host": "host_address",
      "port": 5432, //or other port number if any
      "database": "postgres",
      "user": "user",
      "password": "password_here",
      "applicationName": "pg-diff-cli"
    },
    "targetClient": { //target database properties
      "host": "host_address",
      "port": 5432,
      "database": "temporary_database_name",
      "user": "postgres",
      "password": "password",
      "applicationName": "pg-diff-cli"
    },
    "compareOptions": {
      "author": "Swarn",
      "outputDirectory": "migrations",
      "getAuthorFromGit": false,
      "schemaCompare": {
        "namespaces": ["public"],
        "dropMissingTable": true,
        "dropMissingView": false,
        "dropMissingFunction": false,
        "dropMissingAggregate": false,
        "roles": []
      },
      "dataCompare": {
        "enable": true, //should be false if not comparing data
        "tables": [
          {
            "tableName": "table1",
            "tableSchema": "public",
            "tableKeyFields": ["id"]
          },
          ...more tables
        ]
      }
    },
    "migrationOptions": {
      "patchesDirectory": "migrations",
      "historyTableName": "migration",
      "historyTableSchema": "public"
    }
  }
```
Few things  to remember in terms of configuration is to define `database` in `targetClient`
section before creating migration is to name the temporary database that does not exist already. 
`sourceClient` section of the configuration file is the database we would like to generate 
migrations from.
Data can also be exported from one database to the another one by 
setting the `dataCompare` option to `true` 
and then providing the array of the tables we want to export data from. In our case of `Directus`, 
that will be all the Directus tables.

Configuration file can have multiple instance of configuration based on the scenario. 
Right now , `development` is where we add database information about source database and 
name and ports for a temporary database. 
`local` is when we apply migrations and define database properties there.
Migrations files are generated and saved in migrations directory.  
When `run-migrations` is run , it will check for the patch files in the migration directory, 
Library keeps track of all the applied migrations in `migrations` table in a database. 
