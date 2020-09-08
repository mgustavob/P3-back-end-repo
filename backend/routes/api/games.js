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
// passport.authenticate('jwt', { session: false })
router.post('/addgame', (req, res) => {
    db.Game.findOne({ gameUrl: req.body.gameUrl })
    .then(game => {
        if (game) {
            res.json(game)
       } else {
            const newGame = new Game ({
            name: req.body.name,
            author: req.body.author,
            gameUrl: req.body.gameUrl
        })
        newGame.save()
        .then(createdGame => {
            console.log("New game Created")
            return res.json(createdGame)

        })
        .catch(err => console.log(err))
        }
    res.status(200).json(newGame)
    }).catch(err => res.status(500).json({error: err}))
})

router.get('/current', (req, res) => {
    res.json({
        id: req.game.id
    })
})


module.exports = router;
