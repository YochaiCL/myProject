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
  // console.log(req.body);

  const userId = req.body.userId._id;
  try {
    const arrayId = await TestYourSelf.find({ userId });
    // console.log(arrayId);
    if (arrayId.length > 0) {
      const testNameExists = await TestYourSelf.find({
        userId,
        testName: req.body.testName,
      });

      if (testNameExists.length > 0) {
        res.send({ status: 'Test already exist' });
        return;
      } else {
        await TestYourSelf.create(req.body);
        res.send({ status: 'ok' });
      }
    } else {
      await TestYourSelf.create(req.body);
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

module.exports = router;
