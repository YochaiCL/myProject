const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import bcrypt -converts a plain-text password into a fixed-length string of characters called a hash
const bcrypt = require('bcryptjs');
// Import user data from database mongoDB
const User = mongoose.model('UserInfo');
const CompLearned = mongoose.model('CompLearned');
// module makes it easy to send emails from your computer.
const nodemailer = require('nodemailer');
// Import scehma of how data is in database
require('../../Scehmas/connection/userDetails');

/**
 * Description - This function get the data from the user and signUp him in the server
 */
router.post('/', async (req, res) => {
  const { fullName, email, password, userType } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status: 'User Exists' });
    }
    await User.create({
      fullName,
      email,
      password: encryptedPassword,
      userType,
    });
    // this link will send to the user email and redirect him to reset the password
    const text = `Thanks for joining and happy learning. For any question, you can contact a question and answer service that allows you to get a human answer to any question`;
    // activate send email to the user
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pcbuilderweb@gmail.com',
        pass: 'oggemnxdvgbieqcy',
      },
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject: 'PC Builder',
      text: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ status: 'Error email not send' });
      } else {
        return res.json({ status: 'Email send' });
      }
    });
    // when user is sign up all the status of components are enter to the data base
    const newUser = await User.findOne({ email });
    // console.log(newUser);
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
