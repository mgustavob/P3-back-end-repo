require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(process.env);
// Load User model
const db = require('../../models');
const { route } = require('./games');


// GET api/users/test (Public)
router.get('/test', (req, res) => {
  res.json({ msg: 'User endpoint lookin\' sweet!'});
});

// POST api/users/register (Public)
router.post('/register', (req, res) => {

  // Find user by email
  db.User.findOne({ email: req.body.email })
  .then(user => {
    // if email already exists, send a 400 response
    if (user) {
      return res.status(400).json({ msg: 'Email already exists'});
    } else {
      // Create a new user
      let newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        linkedIn: req.body.linkedIn,
        github: req.body.github,
        profilePic: req.body.profilePic,
        portfolioUrl: req.body.portfolioUrl
      })

      // Salt and hash the password, then save the user
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          // Change the password to the hash
          newUser.password = hash;
          newUser.save()
          .then(createdUser => res.json(createdUser))
          .catch(error =>  console.log(error));
        });
      });
    }
  })
  .catch(error =>  console.log(error));
});

// POST api/users/login (Public)
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find a user via email
  db.User.findOne({ email })
  .then(user => {
    if (!user) {
      res.status(400).json({ msg: 'User not found'});
    } else {
      // Check password with bcrypt
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          // User match, send JSON web token
          // Create a token payload (you can include anything you want)
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            favedGames: user.favedGames
          };

          // Sign token
          jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 }, (error, token) => {
            res.json({ success: true, token: `Bearer ${token}` });
          });
        } else {
          return res.status(400).json({ password: 'Password or email is incorrect' });
        }
      });
    }
  });
});

//newest route edit profile by ID
router.put('/editProfile/:id', (req, res)=>{
  db.User.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedProfile =>{
    console.log(updatedProfile)
    res.status(200).json(updatedProfile);
  })
  .catch(err => console.log(err))  
})

// DELETE user
router.delete('/delete/:id', (req,res) => {
  db.User.findByIdAndDelete(req.params.id).then(removed => {
    res.status(200).json({message: 'Sayonara and happy trails ' + removed + '!'})
  })
})

// GET api/users/current (Private)
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

// ADD GAME TO FAVORITES
router.post('/favorites/:id', (req, res) => {
  let userId = req.body.parameters.userId
  // let gameId = req.body.params.gameId
  let currentGame = req.body.parameters.currentGame
  
  // maybe it would make more sense to hold the whole game object ? 
  console.log('BACKEND LOOOOGIN', currentGame);
  db.User.findByIdAndUpdate(userId,
    // THIS NEEDS TO BE CHANGE TO TITLE TODO
    {$addToSet: {favedGames: currentGame}}, {new: true})
  .then(response => {
    console.log('HERES THE RESPONSE FROM POST', response)
    res.status(200).json({response})
  })
  .catch(err => console.log('ERROR IN BACK END', err))
})


// GET one user's object

router.get('/profile/:id', (req,res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })

  .catch(err => console.log('BAD RESPONSE'))
})


// GET one user's faved games
router.get('/faves/:id', (req,res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.status(200).json(user.favedGames)
  })
})

// REMOVE game from faves (not sure this is working)
router.put('/unfave/:id', (req,res) => {
  let userId = req.body.params.userId
  let gameId = req.body.params.gameId
  console.log('BACKEND LOOOOGIN', req.body);
  db.User.findByIdAndUpdate(userId,
    {$pull: {favedGames: gameId}})
  .then(response => {
    console.log('HERES THE RESPONSE FROM POST', response)
    res.status(200).json({response})
  })
  .catch(err => console.log('ERROR IN BACK END', err))
})


module.exports = router;
