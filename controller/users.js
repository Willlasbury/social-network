const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const data = User.find();
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const createUser = (req, res) => {
  try {
    const newUser = {
      userName: req.body.userName,
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends,
    };
    const data = User.create(newUser);

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

module.exports = {getUsers, createUser}
