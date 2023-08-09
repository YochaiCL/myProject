// Import express
const express = require('express');

// use router as app
const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import question/answer data from database mongoDB
const QuestionAnswer = mongoose.model('QuestionAnswer');

// Import scehma of how data is in database
require('../Scehmas/questionAnswer/questionAnswer');

/**
 * Description - Get all question/answer from the server
 */
router.post('/getQuestionAnswerData', async (req, res) => {
  try {
    let array = await QuestionAnswer.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import users data from database mongoDB
const UserInfo = mongoose.model('UserInfo');

// Import scehma of how data is in database
require('../Scehmas/connection/userDetails');

/**
 * Description - Get all question/answer from the server
 */
router.post('/getUsersData', async (req, res) => {
  try {
    let array = await UserInfo.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import compLearned data from database mongoDB
const compLearned = mongoose.model('CompLearned');

// Import scehma of how data is in database
require('../Scehmas/learnedDetails/learnedDetails');

/**
 * Description - Get all question/answer from the server
 */
router.post('/getLearnedData', async (req, res) => {
  try {
    let array = await compLearned.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;