const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gameUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    author: String,
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
    },
    faved: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Game', gameSchema);