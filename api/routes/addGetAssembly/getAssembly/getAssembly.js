const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import Assemblies data from database mongoDB
const Assemblies = mongoose.model('Assemblies');

/**
 * Description - This function send all data in the server to the client
 * res - Send array of all data in the server
 */
router.get('/', async (req, res) => {
  try {
    let array = await Assemblies.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
