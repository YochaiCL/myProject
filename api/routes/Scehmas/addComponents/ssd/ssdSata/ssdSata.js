const mongoose = require('mongoose');

/**
 * Description - Define the ssd sata scehma
 */
const ssdSataScehma = new mongoose.Schema(
  {
    model: String,
    capacity: String,
    type: String,
  },
  {
    collection: 'SsdSata',
  }
);

mongoose.model('SsdSata', ssdSataScehma);
