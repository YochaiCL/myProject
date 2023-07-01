const express = require('express');
const router = express.Router();
// Defines a compact and self-contained way for securely transmitting information between parties
const jsonWebToken = require('jsonwebtoken');
// Hides the password from attacks
const jsonWebTokenSecret = 'nsdjsdhngdf349587539583**-+++-*[]jkfgkj';
// Import mongoose
const mongoose = require('mongoose');
// module makes it easy to send emails from your computer.
const nodemailer = require('nodemailer');
// Import user data from database mongoDB
const User = mongoose.model('UserInfo');
// we use this to restart the password
router.use(express.urlencoded({ extended: false }));
// Import scehma of how data is in database
require('../../Scehmas/connection/userDetails');

/**
 * Description - This function send to the user email with link to reset the password
 */
router.post('/', async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: 'User Not Exist' });
    }
    const secret = jsonWebTokenSecret + oldUser.password;
    const token = jsonWebToken.sign(
      { email: oldUser.email, id: oldUser._id },
      secret,
      {
        expiresIn: '5m',
      }
    );
    const link = `http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pcbuilderweb@gmail.com',
        pass: 'oggemnxdvgbieqcy',
      },
    });
    let mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject: 'Password Reset',
      text:
        'To reset your password please click on this link:\n' +
        link +
        '\n Thank you,\n Pc Builder ',
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ status: 'Error email not send' });
      } else {
        return res.json({ status: 'Email send' });
      }
    });
    // console.log(link);
  } catch (error) {
    return res.json({ status: 'Something wrong check your details' });
  }
});

module.exports = router;
