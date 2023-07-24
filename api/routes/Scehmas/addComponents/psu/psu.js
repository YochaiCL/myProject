const mongoose = require('mongoose');

/**
 * Description - Define the psu scehma
 */
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
