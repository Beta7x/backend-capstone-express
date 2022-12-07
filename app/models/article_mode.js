const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const articleModel = mongoose.model('article', articleSchema);
module.exports = articleModel;
