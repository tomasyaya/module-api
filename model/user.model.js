const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
