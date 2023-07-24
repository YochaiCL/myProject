const mongoose = require('mongoose');

/**
 * Description - Define the cpu scehma
 */
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
