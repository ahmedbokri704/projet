const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateofcreation: {
    type: Date,
    default: Date.now(),
  },
  tasks:{
    type: Array,
    default: []
  },
});

module.exports = User = mongoose.model("user", UserSchema);
