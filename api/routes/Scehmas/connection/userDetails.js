const mongoose = require('mongoose');

/**
 * Description - Define the connection scehma
 */
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
