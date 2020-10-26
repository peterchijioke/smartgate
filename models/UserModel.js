const { DataTypes } = require("sequelize");
const database = require("./db");

// const Role = require("./Role");

const emp = "employee";

const User = database.define(emp, {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  pin: DataTypes.INTEGER,
});

module.exports = User;
