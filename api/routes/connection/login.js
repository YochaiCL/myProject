// Import express
const express = require('express');

const router = express.Router();

// Defines a compact and self-contained way for securely transmitting information between parties
const jsonWebToken = require('jsonwebtoken');

// Hides the password from attacks
const jsonWebTokenSecret = 'nsdjsdhngdf349587539583**-+++-*[]jkfgkj';

// Import mongoose
const mongoose = require('mongoose');

// Import bcrypt
const bcrypt = require('bcryptjs');

// Import user data from database mongoDB
const User = mongoose.model('UserInfo');

// Import scehma of how data is in database
require('../Scehmas/connection/userDetails');

// Login to the system
router.post('/', async (req, res) => {
  // getting email and password
  const { email, password } = req.body;

  //userIsExist=user
  const user = await User.findOne({ email });
  // checking if the user is exist
  if (!user) {
    return res.json({ error: 'User not found' });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jsonWebToken.sign({ email: user.email }, jsonWebTokenSecret); // check the password of the user
    // console.log(user.userType)

    return res.json({ status: 'ok', data: token, userType: user.userType });
  } else {
    return res.json({ error: 'Invalid Password' });
  }
});

module.exports = router;
