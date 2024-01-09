const fetch = require('node-fetch');

require('dotenv').config();

const PROXY_URL = process.env.PROXY_URL;

async function run() {
  try {
    for(let i = 0; i < 1000; i++) {
      const res = await fetch(`${PROXY_URL}/avg-grades`);
      const parsed = await res.json();

      console.log(`${i} - result ${JSON.stringify(parsed)}`);
    }
  } catch (err) {
    console.log('here-err', err);
  }
}

run();