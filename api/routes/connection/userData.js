const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Defines a compact and self-contained way for securely transmitting information between parties
const jsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Hides the password from attacks
const jsonWebTokenSecret = 'nsdjsdhngdf349587539583**-+++-*[]jkfgkj';
// Import user data from database mongoDB
const User = mongoose.model('UserInfo');
// Import scehma of how data is in database
require('../Scehmas/connection/userDetails');

/**
 * Description - This function show the user data in the client pages
 */
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

/**
 * Description - This function change the user password
 */
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

/**
 * Description - This function change the email/user name in database
 */
router.post('/changeNameOrEmail', async (req, res) => {
  const { user, email } = req.body;
  console.log(user , email)
  const token = jsonWebToken.sign({ email: user.email }, jsonWebTokenSecret);

  try {
    await User.updateOne(
      {
        email: email,
      },
      user
    );
    res.send({ status: 'true', token });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
