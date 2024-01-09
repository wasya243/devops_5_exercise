const express = require('express');
const { uuid } = require('uuidv4');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const FIRST_SERVER_URL = process.env.FIRST_SERVER_URL;

app.use((req, res, next) => {
  console.log(`Request id: ${uuid()}, method: ${req.method}, url: ${req.url}`);

  next();
});

app.get('/health', (req, res) => {
  res.send({
    status: 'ok'
  })
});

app.get('/avg-grades', async (req, res) => {
  try {
    // probably it's better to stream response
    const response = await fetch(`${FIRST_SERVER_URL}/avg-grades`);
    const parsed = await response.json();

    res.send(parsed);
  } catch (err) {
    console.log(err);
  }
});

app.get('*', function(req, res){
  res.status(404).send('not found');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});