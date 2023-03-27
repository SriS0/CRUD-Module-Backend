
# CRUD Module Backend

This is a CRUD (Create, Read, Update, Delete) module for capturing basic user data using a form, storing it in a MongoDB database after validation, and exposing API endpoints for clients to interact with the data. Used Node framework Express for server side and MongoDB for database.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Dependencies](#dependencies)
- [Documentations](#documentations)
- [License](#license)
- [Badges](#badges)

## Installation

Clone the repository
```bash
git clone https://github.com/SriS0/CRUD-Module-Backend
```
Install dependencies
```bash
cd your-repo
npm install
```
Start the Backend server
```bash
npm start
```

## Features

- Create: API endpoint to capture and validate user data before storing it in the database.
- Read: API endpoint to retrieve user data from the database.
- Update: API endpoint to modify existing user data in the database after validating the updated data.
- Delete: API endpoint to remove user data from the database after confirmation.
- Validation: Middleware to validate incoming data and reject invalid requests.
- Error Handling: Middleware to handle errors and return appropriate HTTP status codes.

## Dependencies

The following dependencies are required to run the 
CRUD-Module-Backend

```bash
Express.js
MongoDB 
Mongoose
Cors
Body-parser 
nodemon
```
## Documentations

- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
## License

- [MIT](https://choosealicense.com/licenses/mit/)
## Badges

[![Node.js](https://img.shields.io/badge/Node.js-v16.9.1-green.svg)](https://nodejs.org/)

[![Express](https://img.shields.io/badge/Express-v4.17.1-blue.svg)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-v5.1.1-green.svg)](https://www.mongodb.com/)

[![Mongoose](https://img.shields.io/badge/Mongoose-v6.0.9-blue.svg)](https://mongoosejs.com/)
