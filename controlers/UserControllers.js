const controler = {};

const UsersModel = require("../models/UserModel");

controler.create = async (req, res) => {
  // const data = await UsersModel.create({
  //   name: "Paul Jonah",
  //   pin: "",
  // })
  //   .then(function (data) {
  //     return data;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });

  const data = { name: "peter chijioke", age: 28 };

  res.json(data);
};

module.exports = controler;
