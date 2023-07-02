const mongoose = require('mongoose');

// define cpu Cooler Fan type data
const cpuCoolerFanScehma = new mongoose.Schema(
  {
    model: String,
    socket_support: String,
    fan_diameter: String,
  },
  {
    collection: 'CpuCoolerFan',
  }
);

mongoose.model('CpuCoolerFan', cpuCoolerFanScehma);
