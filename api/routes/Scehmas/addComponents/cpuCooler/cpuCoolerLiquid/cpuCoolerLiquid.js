const mongoose = require('mongoose');

// define cpu Cooler Liquid type data
const cpuCoolerLiquidScehma = new mongoose.Schema(
  {
    model: String,
    socket_support: String,
    radiator_size: String,
  },
  {
    collection: 'CpuCoolerLiquid',
  }
);

mongoose.model('CpuCoolerLiquid', cpuCoolerLiquidScehma);
