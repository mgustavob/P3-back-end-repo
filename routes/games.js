const express = require('express');
const db = require('../../models');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Game = require('../../models/Game')

router.get('/test', (req, res)=> {
    res.json({msg: 'Game endpoint Ok'})
});

// POST new game
router.post('/addgame', (req, res) => {
    db.Game.findOne({ gameUrl: req.body.gameUrl })
    .then(game => {
        if (game) {
            res.json(game)
       } else {
          let newGame = new Game ({
            gameUrl: req.body.gameUrl,
            title: req.body.title,
            screenshot: req.body.screenshot,
            description: req.body.description,
            cohort: req.body.cohort,
            author: req.body.author
          })
        newGame.save()
        .then(createdGame => {
            console.log("New game Created")
            return res.json(createdGame)
        })
        .catch(err => console.log(err))
        }
        res.status(200)
    })
    .catch(err => res.status(500).json({error: err}))
});

// GET all games
router.get('/arcade',(req, res)=>{
  db.Game.find()
  .then(response =>{
      return res.json(response)
  })
});

// GET detail
router.get('/detail/:id', (req, res) => {
  db.Game.findById(req.params.id)
  .then(game => {
    res.status(200).json(game)
  }).catch(err => res.status(500).json({error: err}))
});

// PUT update games
router.put('/edit/:id', (req, res) => {
  db.Game.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(updatedGame => {
    console.log(updatedGame)
    res.status(200).json(updatedGame)
  })
});

// DELETE games
router.delete('/delete/:id', (req, res) => {
  db.Game.findByIdAndDelete(req.params.id).then(removed => {
    res.status(200).json({ message: 'Gave ' + removed + ' the BOOT!👢'})
  })
})

router.get('/:id', (req, res) => {
    db.Game.findById(req.params.id)
    .then(response => {
        res.json(response)
        console.log('BACKEND RESPONSE', response)
    })
    .catch(err => console.log('COULDNT GET FROM DATABASE', err))  
});


module.exports = router;
