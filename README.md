# Folder structure:

- ### prisma

  Related to the available Prisma database features / functionalities such as seeding data, database migration, and defining database's table schema and structure.
- ### src/
  - #### dto

    Stands for Data Transfer Object, basicall the shape of payload transferred to / from clients are defined here as Interface / Type.

  - #### routes
  
    ExpressJs routers defined in *"mini"* apps.

  - #### services

  Business logic layer that deals with data interation with database.

  - #### validators

  Mainly used as a middleware for routes to validate incoming data from clients. Return error message in a desired format if any.