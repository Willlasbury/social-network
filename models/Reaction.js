const { Schema, model } = require("mongoose");
const dayJs = require('dayjs')

// Schema to create User model
const Reactions = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  userName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: dayJs().format()
  },
});


module.exports = Reactions;
