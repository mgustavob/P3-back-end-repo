const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
const gameSchema = new Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    screenshot: String,
    description: String,
    cohort: String,
    gameUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Game', gameSchema); 