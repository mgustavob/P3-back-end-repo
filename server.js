require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// const port = process.env.PORT || 8000;
const passport = require('passport');

// const users = require('./routes/api/users');
// const games = require('./routes/api/games');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());
// Importing passport file into server
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'You checking out my backend?! MY EYES ARE UP HERE!' });
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/games', require("./routes/api/games"));



app.listen(process.env.PORT || 8000, ()=>{
  console.log(`☕️ You're listening to the smooth sounds of port
  ${process.env.PORT || 8000} 🦾🤖, clean servers go brrr`)
})