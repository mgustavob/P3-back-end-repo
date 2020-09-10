const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favedGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }],
  linkedIn: {
    type: String,
    default: 'Anonymous'
  },
  github: {
    type: String,
    default: 'Anonymous'
  },
  profilePic: {
    type: String,
    default: 'no photo available'
  },
  portfolioUrl: {
    type: String,
    default: 'Anonymous'
  },
  bio: {
    type: String,
    minlength: 1,
    maxlength: 151,
    default: 'N/A'
  }
})

module.exports = mongoose.model('User', userSchema);
