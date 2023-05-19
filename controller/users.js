const User = require("../models").Users;

const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = {
      userName: req.body.userName,
      email: req.body.email,
    };
    const data = await User.create(newUser);

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id:", id)
    const data = await User.deleteOne({ _id: id });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

module.exports = { getUsers, createUser, deleteUser };
