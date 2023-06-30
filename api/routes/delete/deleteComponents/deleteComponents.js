const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/**
 * Description - This function delete the selected component from the database
 */
router.post('/', async (req, res) => {
  const collectionName = req.body.collectionName;
  const Collection = mongoose.model(collectionName);
  try {
    await Collection.findOneAndDelete({ model: req.body.model });
    res.send({ status: 'Component deleted' });
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
