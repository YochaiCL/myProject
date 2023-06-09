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

router.post('/', async (req, res) => {
  try {
    let array = await QuestionAnswer.find({
      questionName: req.body.questionName,
    });
    if (array.length > 0) {
      res.send({ status: 'Question already exist' });
      return;
    } else {
      await QuestionAnswer.create({
        userId: req.body.userId,
        questionName: req.body.questionName,
        questionText: req.body.questionText,
      });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
