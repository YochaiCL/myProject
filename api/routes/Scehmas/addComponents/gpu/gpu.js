const mongoose = require('mongoose');

/**
 * Description - Define the gpu scehma
 */
const gpuScehma = new mongoose.Schema(
  {
    model: String,
    bus: String,
    memory: String,
    engine_clock: String,
    cuda_core: String,
    maximum_display: String,
    psu: String,
  },
  {
    collection: 'Gpu',
  }
);

mongoose.model('Gpu', gpuScehma);
