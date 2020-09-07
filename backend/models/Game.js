const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Game schema
const gameSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Game', gameSchema); 