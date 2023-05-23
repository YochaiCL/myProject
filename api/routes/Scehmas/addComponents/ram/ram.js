// Import mongo
const mongoose = require('mongoose');

// define ram type data
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
