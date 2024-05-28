// Imports Sequelize library
const Sequelize = require('sequelize');

// Loads environment variables from a .env file into process.env
require('dotenv').config();

// Checks if process.env.JAWSDB_URL is defined. If it is, it uses it as the database URL.
// If JAWSDB_URL is not defined, it falls back using the database in .env
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Exports Sequelize instance making it available to other parts of the application
module.exports = sequelize;
