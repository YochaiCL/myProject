// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import Motherboard data from database Motherboard
const Assemblies = mongoose.model('Assemblies');

// req represents the request object containing data sent from the client

// res represents the response object used to send a response back to the client.

router.post('/', async (req, res) => {
  try {
    await Assemblies.findOneAndDelete({ assemblyName: req.body.assemblyName });
    res.send({ status: 'Assembly deleted ' });
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
