const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import Assemblies data from database mongoDB
const TestYourSelf = mongoose.model('TestYourSelf');

/**
 * Description - This function send all data in the server to the client
 * res - Send array of all data in the server
 */
router.get('/getTests', async (req, res) => {
  try {
    let array = await TestYourSelf.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});


/**
 * Description - This function delete the selected test from the database
 */
router.post('/deleteTest', async (req, res) => {
  
  try {
    await TestYourSelf.findOneAndDelete({ testName: req.body.testName });
    res.send({ status: 'Component deleted' });
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
