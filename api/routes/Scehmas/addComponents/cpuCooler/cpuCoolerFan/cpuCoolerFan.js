const mongoose = require('mongoose');

/**
 * Description - Define the cpu cooler fan scehma
 */
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
