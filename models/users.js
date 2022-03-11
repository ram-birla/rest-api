const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exist"],
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Invalid Email Address");
      }
    }
  },
  phone: {
    type: Number,
    minLength: 10,
    maxLength: 10,
    required: true,
    unique: [true, "Phone number already exist"]
  },
  address: {
    type: String,
    required: true
  }
});

const User = new mongoose.model('User',userSchema)

module.exports = User;
