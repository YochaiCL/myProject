const mongoose = require('mongoose');

/**
 * Description - Define the ssd m2 scehma
 */
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
