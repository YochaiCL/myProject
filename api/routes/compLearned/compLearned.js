// Import express
const express = require('express');

// use router as app
const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import CompLearned data from database mongoDB
const CompLearned = mongoose.model('CompLearned');

// Import scehma of how data is in database
require('../Scehmas/learnedDetails/learnedDetails');

router.post('/', async (req, res) => {
  // Retrieve the 'newObj' property from the request body and assign it to the 'data' variable
  let data = req.body.newObj;
  // Assign the 'userId' property from the request body to the 'userId' property of the 'data' object
  data.userId = req.body.userId;
  try {
    await CompLearned.updateOne(
      {
        // Find the document in the 'CompLearned' collection with the matching 'userId'
        userId: req.body.userId,
      },
      // Update the document with the values from the 'data' object
      data
    );
    res.send({ status: 'true' });
  } catch (error) {
    console.log(error.message);
    res.send({ status: 'error' });
  }
});

router.post('/getData', async (req, res) => {
  try {
    // Find all 'CompLearned' documents in the MongoDB collection with the matching 'userId'
    let array = await CompLearned.find({ userId: req.body.userId });
    // Send the array of 'CompLearned' documents as the response
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
