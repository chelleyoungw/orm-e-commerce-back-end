# Object-Relational Mapping (ORM) E-commerce Back End
Week-13 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Live Screen Recording of Application Functionality](#live-screen-recording-of-application-functionality)

 * [Technologies Used](#technologies-used)

 * [Installation](#installation)

 * [Authors and Acknowledgements](#authors-and-acknowledgements)

 * [Contributing](#contributing)

 * [Test Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

This application is to be used as the backend for an e-commerce website. You take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. You can manage all products, tags, and categories for you business in a concise and organized manner. 

## Live Screen Recording of Application Functionality

(<iframe src="https://drive.google.com/file/d/1gTwoiQUMLh4eKgdcF_lkrZJUPoxRVds5/preview" width="640" height="480"></iframe>)


## Technologies Used

**Runtime:** Node.js v20.11.1

**Language:** JavaScript

**Dependencies:**

- Dotenv v8.2.0
- Express v4.17.1
- MySQL2 v2.1.0
- Sequelize v5.21.7

## Installation

1. Clone the repo:
   git clone https://github.com/chelleyoungw/orm-e-commerce-back-end.git

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install the following version of node.js.
```
npm install -g node@2.0.3
```
4. Once node.js v16 is installed, in the terminal, utilize the following command to initialize and create a package.json where project files will be stored.
```
   npm init -y 
```

5. Next, use the terminal to run the following command to install the dependencies associated with this application.
```
   npm i
```
6. The package.json file should have the following scripts:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
    "watch": "nodemon server.js",
    "seed": "node seeds/index.js"
  }
```
6. Once the dependencies are installed, you will create the database. Navigate to the directory db that contains the schema.sql file. Once there, open a MySQL shell to run the following command.
```
SOURCE schema.sql;
```
7. Now that the database is created, you will need to seed the database. This will also create the model structure for the tables inside the database. Navigate to the root directory and open a terminal. Run the following commands to seed the database.
```
   node seed/index.js
```
8. Now that the database is seeded, to run the application, navigate to the root directory server.js. Open a terminal and invoke the application with the following command.
```
   node server.js
```
9. You can open an API development platform, like Insomnia (used for this demonstration video) to view and interact with the database.

## Authors and Acknowledgements

- Chelle Wood is the author.
- Occasionally used edX bootcamp Xpert Learning Assistant and ChatGPT. 

## Contributing

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions

Currently no unit testing written yet for this application.

## License

MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/chelleyoungw)

<a href="mailto:chelleyoungw@gmail.com">chelleyoungw@gmail.com</a>