const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
const gameSchema = new Schema({
    gameUrl: {
        type: String,
        required: true
    },
    title: String,
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     default: 'Anonymous'
    // },
    screenshot: {
        type: String,
        default: 'screenshot unavailable'
    },
    description: {
        type: String,
        default: 'none'
    },
    cohort: {
        type: String,
        default: 'unavailable'
    }
})

module.exports = mongoose.model('Game', gameSchema);
