const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TestYourSelf = mongoose.model('TestYourSelf');
require('../../Scehmas/testYourSelf/testYourSelf');

/**
 * Description - This function add test to the database
 * req - receive the test data from the client
 * res - if the test name already exist the test will not add otherwise it will add
 */
router.post('/', async (req, res) => {
  // console.log(req.body);
  const userId = req.body.userId;
  const testName = req.body.testName;
  try {
    let array = await TestYourSelf.find({ userId });
    for (test in array) {
      if (testName === test.testName) {
        res.send({ status: 'Test already exist' });
        return;
      }
    }
    await TestYourSelf.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});
module.exports = router;
