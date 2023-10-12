const { Sequelize } = require("sequelize");
const config = require("../config");

var database = new Sequelize(config.db); //db obj of config file
//sequelize give data in normalize form
database
  .authenticate()
  .then(() => {
    console.log("database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = database;
