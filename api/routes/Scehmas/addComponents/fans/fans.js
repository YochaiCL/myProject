const mongoose = require('mongoose');

// define fans type data
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
