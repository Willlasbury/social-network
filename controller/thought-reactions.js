const { MongoClient, ObjectId } = require("mongodb");
const Thought = require("../models").Thoughts;

const updateReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;

    const newReaction = {
      reactionBody: req.body.reactionBody,
      userName: req.body.userName,
    };

    const thought = await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: newReaction } },
      {new:true}
    );
    

    return res.json(thought);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;

    const data = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reaction: reactionId } },
      { new: true }
    );
    console.log("data:", data);
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

module.exports = { deleteReaction, updateReaction };
