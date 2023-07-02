const mongoose = require('mongoose');

// define ssdM2 type data
const ssdM2Scehma = new mongoose.Schema(
  {
    model: String,
    capacity: String,
    type: String,
  },
  {
    collection: 'SsdM2',
  }
);

mongoose.model('SsdM2', ssdM2Scehma);
