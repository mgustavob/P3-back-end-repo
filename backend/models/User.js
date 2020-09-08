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
<<<<<<< HEAD
=======
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
>>>>>>> 141ebed137c4f6b1b85cf069666a6d29bf3c4bbf
  favedGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }]
<<<<<<< HEAD
=======
// >>>>>>> master
// favedGames: [Game]
>>>>>>> 141ebed137c4f6b1b85cf069666a6d29bf3c4bbf
});

module.exports = mongoose.model('User', userSchema);
