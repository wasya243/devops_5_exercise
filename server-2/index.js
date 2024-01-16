const express = require('express');
const { uuid } = require('uuidv4');

const { USERS } = require('./users');
const db = require('./db');
const { User } = require('./db/models/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use((req, res, next) => {
  console.log(`Request id: ${uuid()}, method: ${req.method}, url: ${req.url}`);

  next();
});

app.get('/health', (req, res) => {
  res.send({
    status: 'ok'
  })
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});

    res.send(users);
  } catch (err) {
    console.log(err);

    res.status(500).send('internal server error')
  }
});

app.get('*', function(req, res){
  res.status(404).send('not found');
});

db.connect()
  .then(() => app.listen(PORT, () => console.log(`Server is listening on ${PORT}`)));