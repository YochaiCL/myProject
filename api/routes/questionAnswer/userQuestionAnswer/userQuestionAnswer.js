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
router.post('/newQuestion', async (req, res) => {
  // console.log(req.body);

  const userId = req.body.userId;
  try {
    const arrayId = await QuestionAnswer.find({ userId });
    // console.log(arrayId);
    if (arrayId.length > 0) {
      const testNameExists = await QuestionAnswer.find({
        userId,
        questionName: req.body.questionName,
      });

      if (testNameExists.length > 0) {
        res.send({ status: 'Question already exist' });
        return;
      } else {
        await QuestionAnswer.create(req.body);
        res.send({ status: 'ok' });
      }
    } else {
      await QuestionAnswer.create(req.body);
      res.send({ status: 'ok' });
    }
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

/**
 * Description - This function delete the selected test from the database
 */
router.post('/deleteQuestionAnswer', async (req, res) => {
  const userId = req.body.userId;
  const questionName = req.body.questionName;
  try {
    const deletedQuestionAnswer = await QuestionAnswer.findOneAndDelete({
      userId,
      questionName,
    });
    if (deletedQuestionAnswer) {
      res.send({ status: 'Question deleted' });
    } else {
      res.send({ status: 'Question not found' });
    }
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function update the data in compLearned collection
 * req - array of all database data
 * res - status of update data
 */
router.post('/updateQuestion', async (req, res) => {
  const userId = req.body.userId;
  const questionName = req.body.questionName;
  const questionTest = req.body.questionText;

  console.log(questionTest);

  try {
    await QuestionAnswer.updateOne(
      {
        userId,
        questionName,
      },
      // Update the document with the values from the 'data' object
      { $set: { questionText: questionTest } }
    );
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
