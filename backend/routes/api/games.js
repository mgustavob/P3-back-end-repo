const express = require('express');
const db = require('../../models');
const router = express.Router();
const Game = require('../../models/Game')



router.get('/test', (req, res)=> {
    res.json({msg: 'Gae enpoint Ok'})
});

// POST new game
router.post('/', (req, res) => {
    db.Game.findOne({ gameUrl: req.body.gameUrl })
    .then(game => {
        if (game) {
            res.send(':dart:', game)
       } else {
            const newGame = new Game ({
            name: req.body.name,
            author: req.body.author,
            gameUrl: req.body.gameUrl
        })
        console.log("New user Created")
        newGame.save()
        .then(createdGame => res.json(createdGame))
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
