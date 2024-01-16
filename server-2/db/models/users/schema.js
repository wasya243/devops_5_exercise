const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  grades: {
    type: [Number],
    default: []
  }
}, { timestamps: true });

module.exports = {
  userSchema
};