const mongoose = require('mongoose');

const { userSchema} = require('./schema');

const User = mongoose.model('User', userSchema, 'users');

module.exports = {
  User
};