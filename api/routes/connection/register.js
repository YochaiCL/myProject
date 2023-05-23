// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import bcrypt -converts a plain-text password into a fixed-length string of characters called a hash
const bcrypt = require('bcryptjs');

// Import user data from database mongoDB
const User = mongoose.model('UserInfo');
const CompLearned = mongoose.model('CompLearned');

// Import scehma of how data is in database
require('../Scehmas/connection/userDetails');

// Register to the system
router.post('/', async (req, res) => {
  const { fullName, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    // save in param the email from the data base
    const oldUser = await User.findOne({ email });
    // checking if the user exist
    if (oldUser) {
      return res.send({ error: 'User Exists' });
    }
    await User.create({
      fullName,
      email,
      password: encryptedPassword,
      userType,
    });
    // when user is sign up all the status of components are enter to the data base
    const newUser = await User.findOne({ email });
    console.log(newUser);
    await CompLearned.create({
      userId: newUser._id,
      cables: {
        haveLearned: false,
        comment: '',
      },
      case: {
        haveLearned: false,
        comment: '',
      },
      cpu: {
        haveLearned: false,
        comment: '',
      },
      cpuCooler: {
        haveLearned: false,
        comment: '',
      },
      dvd: {
        haveLearned: false,
        comment: '',
      },
      fans: {
        haveLearned: false,
        comment: '',
      },
      gpu: {
        haveLearned: false,
        comment: '',
      },
      hd: {
        haveLearned: false,
        comment: '',
      },
      motherboard: {
        haveLearned: false,
        comment: '',
      },
      psu: {
        haveLearned: false,
        comment: '',
      },
      ram: {
        haveLearned: false,
        comment: '',
      },
      ssd: {
        haveLearned: false,
        comment: '',
      },
    });

    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
