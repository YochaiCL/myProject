const mongoose = require('mongoose');

/**
 * Description - Define the fans scehma
 */
const fansScehma = new mongoose.Schema(
  {
    model: String,
    fan_size: String,
  },
  {
    collection: 'Fans',
  }
);

mongoose.model('Fans', fansScehma);
