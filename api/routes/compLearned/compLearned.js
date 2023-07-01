const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import CompLearned data from database mongoDB
const CompLearned = mongoose.model('CompLearned');
// Import scehma of how data is in database
require('../Scehmas/learnedDetails/learnedDetails');

/**
 * Description - This function update the data in compLearned collection
 * req - array of all database data
 * res - status of update data
 */
router.post('/', async (req, res) => {
  let data = req.body.productsArray;
  data.userId = req.body.userId;
  try {
    await CompLearned.updateOne(
      {
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

/**
 * Description - This function get all data from CompLearned database and send it as array
 * rep - Receive from the client the user data
 * res - Send to the client all data in CompLearned that related to user data
 */
router.post('/getData', async (req, res) => {
  try {
    let array = await CompLearned.find({ userId: req.body.userId });
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
