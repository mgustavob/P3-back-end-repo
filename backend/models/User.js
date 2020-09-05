const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
let gameSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    screenshot: String,
    description: String,
    cohort: String,
    gameUrl: String
})

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
  favedGames: [gameSchema]
});

module.exports = mongoose.model('User', userSchema);