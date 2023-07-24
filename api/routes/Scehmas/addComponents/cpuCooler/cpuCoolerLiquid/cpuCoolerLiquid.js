const mongoose = require('mongoose');

/**
 * Description - Define the cpu cooler liquid scehma
 */
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
