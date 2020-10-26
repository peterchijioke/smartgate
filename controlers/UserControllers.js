const controler = {};

const UsersModel = require("../models/UserModel");

controler.create = async (req, res) => {
  const data = await UsersModel.create({
    name: "Paul Jonah",
    pin: "",
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json(data);
};

module.exports = controler;
