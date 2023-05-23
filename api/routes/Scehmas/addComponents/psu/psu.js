// Import mongo
const mongoose = require('mongoose');

// define psu type data
const psudScehma = new mongoose.Schema(
  {
    model: String,
    total_output: String,
  },
  {
    collection: 'Psu',
  }
);

mongoose.model('Psu', psudScehma);
