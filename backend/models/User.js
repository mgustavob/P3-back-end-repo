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
// <<<<<<< master
//   favedGames: {
//     name: String,
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author',
//         screenshot: String,
//         description: String,
//         cohort: String,
//         gameUrl: String
//     }
//     },
// =======
//   favedGames: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Game'
//   }]
// >>>>>>> master
});

module.exports = mongoose.model('User', userSchema);
