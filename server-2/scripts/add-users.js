require('dotenv').config();

const db = require('../db');
const { User } = require('../db/models/users');
const { USERS } = require('../users');

async function run() {
  try {
    console.log('inserting users');

    await db.connect();

    if (await User.findOne()) {
      await User.deleteMany();
    }

    await User.insertMany(USERS);

    console.log('inserted users');

    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

run();