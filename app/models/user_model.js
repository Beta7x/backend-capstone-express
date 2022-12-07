const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 100,
    required: true,
  },
  email: {
    type: String,
    maxlength: 150,
    required: true,
  },
  firstName: {
    type: String,
    maxlength: 50,
    required: true,
  },
  lastName: {
    type: String,
    maxlength: 50,
  },
  password: {
    type: String,
    maxlength: 255,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
