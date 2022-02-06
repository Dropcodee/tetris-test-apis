# Installation Process

    1. ` yarn install `
    2. Run application `yarn serve`

## Application Information

    1. Application is written in typescript, also all application code resides inside the src directory including the index file.
    2. src/config folder - this holds all configuration related code like the logger, database connection code.
    3. src/entity folder - this holds the code for the database table structure or models
    4. src/handlers folder - this holds the code for all request handlers or A.K.A controllers.
    5. src/helpers folder - this holds helper code or functions that can be used through out the code, error classes & exceptions etc.
    6. src/middleware folder - this folder contains code to be used for request checking and validation of inputs where needed
    7. src/router folder - this holds all route handlers or endpoints used in this application, note that the root index file for the router connects all other route files together and its initialized in the main index starter file.
    8. src/schemas folder - this holds validation interfaces that controls the shape of every post/put request that comes into the application
    9. src/services folder - this holds the business logic and also interacts with the database layer for retrieving data and inserting data.
