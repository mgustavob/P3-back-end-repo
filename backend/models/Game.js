const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    linkedIn: {
        type: String,
        default: 'N/A'
    },
    github: {
        type: String,
        default: 'N/A'
    },
    profilePic: {
        type: String,
        default: 'N/A'
    },
    portfolioUrl: {
        type: String,
        default: 'N/A'
    },
    bio: {
        type: String,
        minlength: 1,
        maxlength: 151,
        default: 'N/A'
    }
})


const gameSchema = new Schema({
    gameUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    author: [authorSchema],
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