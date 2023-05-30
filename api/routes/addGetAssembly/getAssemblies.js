// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import Assemblies   data from database mongoDB
const Assemblies = mongoose.model('Assemblies');
// The GET request is used to retrieve data from the server. It is commonly used for fetching or reading resources.
router.get('/assemblies', async (req, res) => {
  try {
    // Find all 'Motherboard' documents in the MongoDB collection
    let array = await Assemblies.find({});
    // Send the array of 'Motherboard' documents as the response
    res.send(array);
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
