const mongoose = require('mongoose');

// define ssdSata type data
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
