const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
const gameSchema = new Schema({
    gameUrl: {
        type: String,
        required: true
<<<<<<< HEAD
=======
    },
    title: String,
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     default: 'Anonymous'
    // },
    screenshot: {
        type: String,
        default: 'screenshot unavalable'
    },
    description: {
        type: String,
        default: 'none'
    },
    cohort: {
        type: String,
        default: 'unavailable'
>>>>>>> 0bee14e0530813d25e33ab669826e18b83c03394
    }
})

module.exports = mongoose.model('Game', gameSchema);
