const mongoose = require('mongoose');

/**
 * Description - Define the ram scehma
 */
const ramScehma = new mongoose.Schema(
  {
    model: String,
    memory_series: String,
    memory_size: String,
    latency: String,
    speed: String,
  },
  {
    collection: 'Ram',
  }
);

mongoose.model('Ram', ramScehma);
