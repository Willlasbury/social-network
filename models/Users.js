const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema({
  userName: { type: String, unique: true, required: true, trimmed: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: 'thought',
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'friend',
  },
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
