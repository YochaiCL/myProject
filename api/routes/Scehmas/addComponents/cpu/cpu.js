// Import mongo
const mongoose = require('mongoose');

// define cpu type data
const cpuScehma = new mongoose.Schema(
  {
    model: String,
    cores: String,
    threads: String,
    frequency: String,
    cache: String,
    memory_type: String,
    socket: String,
  },
  {
    collection: 'Cpu',
  }
);

mongoose.model('Cpu', cpuScehma);
