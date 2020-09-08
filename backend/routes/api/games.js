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
<<<<<<< HEAD
            let newGame = new Game ({
            name: req.body.name,
            author: req.body.author,
            gameUrl: req.body.gameUrl
        })
=======
          let newGame = new Game ({
            gameUrl: req.body.gameUrl,
            title: req.body.name,
            screenshot: req.body.screenshot,
            description: req.body.description,
            cohort: req.body.cohort
            // author: req.body.author,
          })
>>>>>>> 0bee14e0530813d25e33ab669826e18b83c03394
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
})

router.get('/current', (req, res) => {
    res.json({
        id: req.game.id
    })
})


module.exports = router;