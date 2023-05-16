# E-commerce Back End

This project involves building the back end for an e-commerce site using the latest technologies. The goal is to create a functional Express.js API and configure it to interact with a MySQL database using Sequelize.

E-commerce is a rapidly growing sector in the electronics industry, with billions of dollars in revenue generated each year. Platforms like Shopify and WooCommerce provide essential services to businesses of all sizes. Understanding the fundamental architecture of e-commerce sites is crucial for developers in this field.

## User Story
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies


## Acceptance Criteria
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database


## Approach
To accomplish the project's objectives, we began by setting up an Express.js server and configuring the necessary routes and endpoints. Next, we integrated Sequelize, a powerful ORM, to facilitate interaction with the MySQL database. We defined the database models and relationships to ensure data consistency and integrity.

We created an environment variable file to store sensitive information such as the database name, MySQL username, and password. This allowed for easy configuration and ensured that the application could connect to the database securely.

For database initialization and testing purposes, we implemented schema and seed commands to create a development database and populate it with sample data.

To start the application, we implemented the command that initiates the server and synchronizes the Sequelize models with the MySQL database, ensuring that the database schema matches the defined models.

We thoroughly tested the application using Insomnia Core, an API testing tool, to validate the functionality of the GET, POST, PUT, and DELETE routes for categories, products, and tags.

## Completed tasks
- Set up Express.js server
- Configured routes and endpoints
- Integrated Sequelize ORM for MySQL database interaction
- Defined database models and relationships
- Implemented environment variable file for secure configuration
- Created schema and seed commands for database initialization
- Developed command to start the server and sync - Sequelize models with the database
- Tested API functionality using Insomnia Core

## Conclusion
In conclusion, this project successfully creates a robust back end for an e-commerce website using the latest technologies. By leveraging Express.js and Sequelize, developers can build scalable and efficient e-commerce platforms. The completion of the acceptance criteria ensures that the application is capable of connecting to a MySQL database, generating test data, and performing CRUD operations through API routes. With this back end in place, internet retail companies can compete effectively in the e-commerce market.

## Link

The below is a link to the walkthrough video: 
https://www.loom.com/share/57d51e153524435fa676ef8202a69476 


## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License.
