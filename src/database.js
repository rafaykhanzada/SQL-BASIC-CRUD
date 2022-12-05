var Sequelize = require('sequelize');

const database = new Sequelize(
  'TEST', // name database
  'sa', // user database
  'kfk9072p!', // password database
  {
    host: 'localhost',
    dialect: 'mssql' // mariadb / sqlite / postgres
  }
);

database.sync()

module.exports = database;
