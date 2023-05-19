const { Schema, model } = require("mongoose");
const dayJs = require('dayjs')

// Schema to create User model
const reactionSchema = new Schema({
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

// Initialize our User model
const Reactions = model("reaction", reactionSchema);

module.exports = Reactions;
