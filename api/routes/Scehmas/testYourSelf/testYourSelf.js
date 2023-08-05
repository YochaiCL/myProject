// Import mongo
const mongoose = require('mongoose');

/**
 * Description - Define the test scehma
 */
const testYourSelfScehma = new mongoose.Schema(
  {
    userId: String,
    testName: String,
    modelCase: String,
    modelMotherboard: String,
    modelCPU: String,
    modelCPUCooler: String,
    modelGPU: String,
    modelPSU: String,
    modelRAM: String,
    modelSSD: String,
  },
  {
    collection: 'TestYourSelf',
  }
);

mongoose.model('TestYourSelf', testYourSelfScehma);
