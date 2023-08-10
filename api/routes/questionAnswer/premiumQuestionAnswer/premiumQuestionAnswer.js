// Import express
const express = require('express');

// use router as app
const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import CompLearned data from database mongoDB
const QuestionAnswer = mongoose.model('QuestionAnswer');

// Import scehma of how data is in database
require('../../Scehmas/questionAnswer/questionAnswer');

/**
 * Description - Get all Question/Answer from the server
 */
router.post('/getData', async (req, res) => {
  try {
    let array = await QuestionAnswer.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// module makes it easy to send emails from your computer.
const nodemailer = require('nodemailer');

/**
 * Description - This function update the data in question/answer collection
 * req - array of all database data
 * res - status of update data
 */
router.post('/updateAnswer', async (req, res) => {
  const userId = req.body.userId;
  const questionName = req.body.questionName;
  const answerText = req.body.answerText;

  try {
    await QuestionAnswer.updateOne(
      {
        userId,
        questionName,
      },
      // Update the document with the values from the 'data' object
      { $set: { answerText: answerText, haveAnAnswer: true } }
    );

    const userEmail = req.body.userEmail;

    const text = `You received an answer to your question about the ${questionName}, please log in to see it.\nThank you,\nPc Builder`;

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
      to: userEmail,
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

    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
