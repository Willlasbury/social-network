const { Schema, model } = require("mongoose");
const dayJs = require("dayjs");
const Reaction = require("./Reaction");

// Schema to create User model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    unique: true,
    required: true,
    maxlength: 120,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: dayJs().format(),
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [Reaction],
});

// Initialize our User model
const Thoughts = model("thought", thoughtSchema);

module.exports = Thoughts;
