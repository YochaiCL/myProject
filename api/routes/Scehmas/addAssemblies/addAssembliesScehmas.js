const mongoose = require('mongoose');

// define Assembly type data
const assembliesScehma = new mongoose.Schema(
  {
    assemblyName: String,
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
    collection: 'Assemblies',
  }
);

mongoose.model('Assemblies', assembliesScehma);
