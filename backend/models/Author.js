const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new mongoose.Schema({
    name: String,
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    linkedIn: String,
    github: String,
    profilePic: String 
})

module.exports = mongoose.model('Author', authorSchema); 