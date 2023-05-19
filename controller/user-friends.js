const { MongoClient, ObjectId } = require("mongodb");
const User = require("../models").Users;


const updateFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userId:", userId)
    const friendId = req.params.friendId;
    const user = await User.findOne({ _id: userId });
    await user.friends.push({
      _id: friendId,
    });
    const data = await user.save()
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
   
    const data = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      {new: true}
    );
    console.log("data:", data)
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

module.exports = { deleteFriend, updateFriend };
