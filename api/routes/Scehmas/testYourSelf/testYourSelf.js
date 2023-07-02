// Import mongo
const mongoose = require('mongoose');

// define test type data
const testYourSelfScehma = new mongoose.Schema(
  {
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
