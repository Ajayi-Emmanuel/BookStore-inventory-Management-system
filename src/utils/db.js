const { Sequelize } = require('sequelize');
const log = require("./logger")

const sequelize = new Sequelize('bookstore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

  
async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      log.info('Connection to the database has been established successfully.');
    } catch (error) {
      log.info('Unable to connect to the database:', error);
    }
  }

  
module.exports = {testDatabaseConnection};
