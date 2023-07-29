const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import Assemblies data from database mongoDB
const TestYourSelf = mongoose.model('TestYourSelf');

/**
 * Description - This function send all data in the server to the client
 * res - Send array of all data in the server
 */
router.post('/getTests', async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  try {
    let array = await TestYourSelf.find({ userId });
    // console.log(array);
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function delete the selected test from the database
 */
router.post('/deleteTest', async (req, res) => {
  const userId = req.body.userId;
  const testName = req.body.testName;
  try {
    const deletedTest = await TestYourSelf.findOneAndDelete({
      userId,
      testName,
    });
    if (deletedTest) {
      res.send({ status: 'Test deleted' });
    } else {
      res.send({ status: 'Test not found' });
    }
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
