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
module.exports = router;
