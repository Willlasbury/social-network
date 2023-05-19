const Thought = require("../models").Thoughts;

const getThoughts = async (req, res) => {
  try {
    const data = await Thought.find();
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
      userName: req.body.userName
    };
    const data = await Thought.create(newThought);

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const deleteThought = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id:", id)
    const data = await Thought.deleteOne({ _id: id });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
};

const updateThought = async (req, res) => {
   try{
    const id = req.params.id
    Thought.updateOne({_id:id}, {$set: { "thoughtText" : req.body.thoughtText}})
   
   
   } catch (err){
    console.log(err);
    return res.status(500).json({msg:'some error', err:err})
   }
}

module.exports = { getThoughts, createThought, deleteThought, updateThought };
