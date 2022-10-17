---
title: Appsmith Migrations
---

## Appsmith
Appsmith is a framework to build admin panels, CRUD apps and workflows. 
Appsmith is an open-source tool that is free to use. 
It can be used to build admin panel where user can access data from multiple sources including databases like MySql , Postgres , Redshift and even APIs.  

## Migrations

Appsmith does not provide the functionality to migrate the data and project configuration from one machine to another.
But, we can use ``mongodbdump`` to dump data from one project and ``mongorestore`` to the another one. 
This method does not go well with Appsmith as it looses some information when restoring data to the target machine. 
It works when we drop the database from the target machine and then restore the database from source machine. 
This is a risky move, so it is only for the first time we move to the production from development or from one machine to 
the another.
Also, moving dump directory from one project to another is not an appropriate way.

*Note: Documentation will be updated if and when there is a new way to apply safe migrations*.

Following are the steps.
First, dump the database to a folder in a project we will be migrating from. 
To do so, first create a folder inside data directory in the appsmith project. Update the volumes list 
by adding
```shell
`- ./data/export:/export
```
in ``docker-compose`` file's ``mongo`` service. Restart the container.
Run ``docker exec -it <container_name_for_mongo> bash`` then run ``mongodump`` command
```shell
mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/export/appsmith-mongo-dump
```
It will create the dump directory in export directory.
Now, we will prep the target appsmith project for restoring the data.
Get into mongo db shell by running
``docker exec -it <container_name_for_mongo> bash``
and then run the next command to start the process of dropping database ``appsmith``.  Run ``mongo -u <username>  -p password``
then see if appsmith is in databases list by running ``show dbs`` and if it is present , run ``use appsmith`` and then ``db.dropDatabase()``. 
This will drop the database and now we can start restoring of database. Run the following command after making store that appsmith project has directory with a backed up database.
```shell
mongorestore --drop /export/appsmith-mongo-dump/appsmith -d appsmith --uri=mongodb://<rootUser>:<rootPassword>@localhost/appsmith
```
After completing the above steps, replace the content of the file named ``encryption.env`` with the content from the same file in a source appsmith project. 
Now restart the project using ``docker-compose down`` and ``docker-compose up -d`` or using ``chewy-cli`` built in commands for docker operations, 
and you will see all the applications and organizations from the source project. 
