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
router.post('/getData', async (req, res) => {
  try {
    // Find all 'CompLearned' documents in the MongoDB collection with the matching 'userId'
    let array = await QuestionAnswer.find({});
    // Send the array of 'CompLearned' documents as the response
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function update the data in compLearned collection
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
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
