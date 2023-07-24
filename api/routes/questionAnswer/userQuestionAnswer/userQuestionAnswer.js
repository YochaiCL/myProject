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
 * Description -
 */
router.post('/', async (req, res) => {
  try {
    let existingQuestion = await QuestionAnswer.find({
      questionName: req.body.questionName,
    });
    if (existingQuestion != null) {
      return res.send({ status: 'Question already exist' });
    }
    await QuestionAnswer.create({
      userId: req.body.userId,
      questionName: req.body.questionName,
      questionText: req.body.questionText,
    });
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

/**
 * Description -
 */
router.post('/getData', async (req, res) => {
  try {
    // Find all 'CompLearned' documents in the MongoDB collection with the matching 'userId'
    let array = await QuestionAnswer.find({ userId: req.body.userId });
    // Send the array of 'CompLearned' documents as the response
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
