// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import Motherboard data from database Motherboard
const TestYourSelf = mongoose.model('TestYourSelf');

// Import scehma of how Motherboard is in database
require('../../Scehmas/testYourSelf/testYourSelf');

// req represents the request object containing data sent from the client

// res represents the response object used to send a response back to the client.

router.post('/', async (req, res) => {
  try {
    let array = await TestYourSelf.find({
      assemblyName: req.body.assemblyName,
    });
    if (array.length > 0) {
      res.send({ status: 'Test already exist' });
      return;
    } else {
      // Create a new 'Motherboard' document in the MongoDB collection using the data sent in the request body
      await TestYourSelf.create(req.body);
      // Send a response with a 'status' property set to 'ok' indicating successful creation
      res.send({ status: 'ok' });
    }
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
