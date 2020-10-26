const { Sequelize } = require("sequelize");

const config = {
  mysql: {
    options: {
      // username: "b1a2e6313873db",
      // password: "73ccd8cb",
      // database: "node",
      // host: "us-cdbr-east-02.cleardb.com",
      // dialect: "mysql",

      username: "be1c7ed0a45009",
      password: "46368bee",
      database: "heroku_8f5390b3834ccab",
      host: "us-cdbr-east-02.cleardb.com",
      dialect: "mysql",
    },
  },
};

const sequelize = new Sequelize(config.mysql.options);
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = sequelize;
