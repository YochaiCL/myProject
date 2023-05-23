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

// when the user click on the line above he will transfer to below code
// get - get the user information for restart the password
// in this code we check if the id and token are verify to the user

router.get('/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  // verify if the id and token are belong to the user
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = jsonWebTokenSecret + oldUser.password;
  // if the user are have click on the link its will show 'verify' if not 'not verify'
  // if it's verify the code will preform the index.ejs file

  try {
    const verify = jsonWebToken.verify(token, secret);
    res.render('index', { email: verify.email, status: 'Not Verified' });
  } catch (error) {
    console.log(error);
    res.send('Not Verified');
  }
});

// post -post the user information for restart the password
router.post('/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  // verify if the id and token are belong to the user
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: 'User Not Exists!!' });
  }
  const secret = jsonWebTokenSecret + oldUser.password;
  // if the user are have click on the link its will show 'verify' if not 'not verify'
  try {
    const verify = jsonWebToken.verify(token, secret);
    // first we encrypted our password
    const encryptedPassword = await bcrypt.hash(password, 10);
    // find the user id
    //update the password and save it as encrypt password
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
});

module.exports = router;
