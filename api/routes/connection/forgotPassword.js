// Import express
const express = require('express');

const router = express.Router();

// Defines a compact and self-contained way for securely transmitting information between parties
const jsonWebToken = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

// Hides the password from attacks
const jsonWebTokenSecret = 'nsdjsdhngdf349587539583**-+++-*[]jkfgkj';

// Import mongoose
const mongoose = require('mongoose');

// Import user data from database mongoDB
const User = mongoose.model('UserInfo');

// Import scehma of how data is in database
require('../Scehmas/connection/userDetails');

// Show user data in user page
router.post('/', async (req, res) => {
  const { token } = req.body;

  try {
    // verifyToken=user
    const user = jsonWebToken.verify(token, jsonWebTokenSecret);
    console.log(user);
    // take the user email
    const userEmail = user.email;
    User.findOne({ email: userEmail })
      .then(data => {
        res.send({ status: 'ok', data: data });
      })
      .catch(error => {
        res.send({ status: 'error', data: error });
      });
  } catch (error) {}
});

// Show user data in user page
router.post('/changePassword', async (req, res) => {
  const { user, email } = req.body;
  const encryptedPassword = await bcrypt.hash(user.password, 10);
  let newUser = user;
  newUser.password = encryptedPassword;
  try {
    await User.updateOne(
      {
        email: email,
      },
      newUser
    );
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

// Show user data in user page
router.post('/changeNameOrEmail', async (req, res) => {
  const { user, email } = req.body;

  try {
    await User.updateOne(
      {
        email: email,
      },
      user
    );
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
