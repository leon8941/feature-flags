## Folder structure:

- ### prisma

  Related to the available Prisma database features / functionalities such as seeding data, database migration, and defining database's table schema and structure.
- ### src/
  - #### dto

    Stands for Data Transfer Object, basically the shape of payload transferred to / from clients are defined here as Interface / Type.

  - #### routes
  
    ExpressJs routers defined in *"mini"* apps.

  - #### services

  Business logic layer that deals with data interation with database.

  - #### validators

  Mainly used as a middleware for routes to validate incoming data from clients. Return error message in a desired format if any.

## Database table schemas:

### features

  | Column Name |	Data type |
  | ------- | ------- |
  | id | serial4	|
  | name | text	|
  | created_at | timestamp(3)	|
  | updated_at | timestamp(3)	|

### users

  | Column Name |	Data type |
  | ------- | ------- |
  | id | serial4	|
  | email | text	|
  | password | text	|
  | name | text	|
  | created_at | timestamp(3)	|
  | updated_at | timestamp(3)	|

### user_features

  | Column Name |	Data type |
  | ------- | ------- |
  | id | serial4	|
  | user_id | serial4	|
  | feature_id | serial4	|
  | created_at | timestamp(3)	|
  | updated_at | timestamp(3)	|
