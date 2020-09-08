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
  favedGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }]
// >>>>>>> master
// favedGames: [Game]
});
=======

  favedGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  }],
  linkedIn: {
    type: String,
    default: 'Anoymous'
  },
  github: {
    type: String,
    default: 'Anonymous'
  },
  profilePic: {
    type: String,
    default: 'no photo available'
  },
  portfolioUrl: {
    type: String,
    default: 'Anonymous'
  }
                              })
>>>>>>> 0bee14e0530813d25e33ab669826e18b83c03394

module.exports = mongoose.model('User', userSchema);
