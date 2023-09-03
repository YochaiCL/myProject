// Import express
const express = require('express');

// use router as app
const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import question/answer data from database mongoDB
const QuestionAnswer = mongoose.model('QuestionAnswer');

// Import scehma of how data is in database
require('../../Scehmas/questionAnswer/questionAnswer');

/**
 * Description - Create new question and added to the server
 */
router.post('/newQuestion', async (req, res) => {
  const userId = req.body.userId;
  try {
    const arrayId = await QuestionAnswer.find({ userId });
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
 * Description - Get all question/answer from the server
 */
router.post('/getData', async (req, res) => {
  try {
    let array = await QuestionAnswer.find({ userId: req.body.userId });
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
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function update the data in question/answer collection
 * req - array of all database data
 * res - status of update data
 */
router.post('/updateQuestion', async (req, res) => {
  const userId = req.body.userId;
  const questionName = req.body.questionName;
  const questionText = req.body.questionText;
  const userType = req.body.userType;
  try {
    let array = await QuestionAnswer.find({ userId: userId, questionName });
    if (array.length > 0) {
      let allQuestions = array[0].questionAnswerText;
      allQuestions.push({ questionText, userType });
      await QuestionAnswer.updateOne(
        {
          userId,
          questionName,
        },
        { $set: { questionAnswerText: [...allQuestions], haveAnAnswer: false } }
      );
      res.send({ status: 'true' });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function update the amount of stars in the question/answer collection
 */
router.post('/updateStars', async (req, res) => {
  const userId = req.body.userIdStar;
  const questionName = req.body.questionName;
  const selectedStars = req.body.selectedStars;
  try {
    await QuestionAnswer.updateOne(
      {
        userId,
        questionName,
      },
      { $set: { selectedStars: selectedStars } }
    );
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

module.exports = router;
