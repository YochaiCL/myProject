const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Defines a compact and self-contained way for securely transmitting information between parties
const jsonWebToken = require('jsonwebtoken');
// Hides the password from attacks
const jsonWebTokenSecret = 'nsdjsdhngdf349587539583**-+++-*[]jkfgkj';
// Import bcrypt
const bcrypt = require('bcryptjs');
// Import user data from database mongoDB
const User = mongoose.model('UserInfo');
// Import scehma of how data is in database
require('../../Scehmas/connection/userDetails');

/**
 * Description - This function verify the selected email in the database
 */
router.get('/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  // verify if the id and token are belong to the user
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = jsonWebTokenSecret + oldUser.password;
  try {
    const verify = jsonWebToken.verify(token, secret);

    res.render('index', { email: verify.email, status: 'Not Verified' });
  } catch (error) {
    console.log(error);
    res.send('Not Verified');
  }
});

/**
 * Description - This function update the user password
 */
router.post('/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log('hdgf');
  console.log(password);
  function checkPassword(password) {
    if (!(/\d/.test(password) && /[a-zA-Z]/.test(password))) {
      return false;
    }
    if (password.length < 3 || password.length > 8) {
      return false;
    }
    return true;
  }

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = jsonWebTokenSecret + oldUser.password;
  const verify = jsonWebToken.verify(token, secret);
  if (!checkPassword(password)) {
    console.log(password , "no");
    // return res.json({ status: 'not good password' });
    res.render('index', { email: verify.email, status: 'not good password' });
    // return res.json({ status: 'not good' });
  } else {
    try {
      console.log('kk');
      const encryptedPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );
      res.render('index', { email: verify.email, status: 'verified' });
    } catch (error) {
      console.log(error);
      res.json({ status: 'Something Went Wrong' });
    }
  }
});

module.exports = router;
