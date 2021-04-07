const mongoose = require('mongoose');
require('./entities/userModel');
const User = mongoose.model('User');
const express = require('express');

const app = express();
const port = 3000;

app.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.userId }, '-_id -__v');
    res.json(user);
  } catch (err) {
    console.log(err);
  }
})

listen = () => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

connect = () => {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect('mongodb://localhost:27017/testproj', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

connect();

module.exports = app;
