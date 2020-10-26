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

  const data = { name: req.body.name, pin: req.body.pin };

  console.log(data);
};

module.exports = controler;
