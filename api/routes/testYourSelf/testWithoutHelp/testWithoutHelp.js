const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TestYourSelf = mongoose.model('TestYourSelf');
// Import scehma of how Motherboard is in database
require('../../Scehmas/testYourSelf/testYourSelf');

router.post('/', async (req, res) => {
  try {
    let array = await TestYourSelf.find({
      assemblyName: req.body.assemblyName,
    });
    if (array.length > 0) {
      res.send({ status: 'Test already exist' });
      return;
    } else {
        await TestYourSelf.create(req.body);
      res.send({ status: 'ok' });
    }
  } catch (error) {

    res.send({ status: 'error' });
  }
});

module.exports = router;
