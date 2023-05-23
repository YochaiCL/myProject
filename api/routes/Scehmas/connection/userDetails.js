// Import mongo
const mongoose = require('mongoose');

// define user type data
const userDetailsScehma = new mongoose.Schema(
  {
    fullName: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: 'UserInfo',
  }
);

mongoose.model('UserInfo', userDetailsScehma);
