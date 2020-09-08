const express = require('express');
const db = require('../../models/Game');
const router = express.Router();

// POST new game
router.post('/addgame', (req, res) => {
    db.Game.findOne({gameUrl: req.body.gameUrl}).then(newGame => {
      if (newGame) {
        res.send('🎯', newGame)
      } else {
        const newGame = new Game ({
          name: req.body.name,
          author: req.body.author,
          gameUrl: req.body.gameUrl
        })
      }
        // res.status(200).json(newGame)
    }).catch(err => res.status(500).json({error: err}))
  })

module.exports = router;