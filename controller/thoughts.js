const Thought = require("../models").Thoughts;
const User = require("../models").Users;

const getThoughts = async (req, res) => {
  try {
    const data = await Thought.find();
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const getOneThought = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Thought.findById(id);
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const createThought = async (req, res) => {
  try {
    const newThought = {
      thoughtText: req.body.thoughtText,
      userName: req.body.userName,
    };
    const thoughtRes = await Thought.create(newThought);
    const userRes = await User.findOneAndUpdate({
      userName: req.body.userName,
    }, {$push: {thoughts: thoughtRes._id}});

    return res.json(thoughtRes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const deleteThought = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id:", id);
    const data = await Thought.deleteOne({ _id: id });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const updateThought = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Thought.updateOne(
      { _id: id },
      { $set: { thoughtText: req.body.thoughtText } }
    );
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

module.exports = {
  getThoughts,
  getOneThought,
  createThought,
  deleteThought,
  updateThought,
};
