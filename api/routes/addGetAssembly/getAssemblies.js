// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');
// Import components database
const Case = mongoose.model('Case');
const Cpu = mongoose.model('Cpu');
const CpuCoolerFan = mongoose.model('CpuCoolerFan');
const CpuCoolerLiquid = mongoose.model('CpuCoolerLiquid');
const Fans = mongoose.model('Fans');
const Gpu = mongoose.model('Gpu');
const Motherboard = mongoose.model('Motherboard');
const Psu = mongoose.model('Psu');
const Ram = mongoose.model('Ram');
const SsdM2 = mongoose.model('SsdM2');
const SsdSata = mongoose.model('SsdSata');

router.get('/modals', async (req, res) => {
  try {
    // Find all 'Case' documents in the MongoDB collection
    let getCase = await Case.find({});
    let sendCase = [];
    for (let model of getCase) {
      sendCase.push(model.model);
    }

    // Find all 'Cpu' documents in the MongoDB collection
    let getCpu = await Cpu.find({});
    let sendCpu = [];
    for (let model of getCpu) {
      sendCpu.push(model.model);
    }

    // Find all 'Cpu Cooler Fan' documents in the MongoDB collection
    let getCpuCoolerFan = await CpuCoolerFan.find({});
    let sendCpuCoolerFan = [];
    for (let model of getCpuCoolerFan) {
      sendCpuCoolerFan.push(model.model);
    }

    // Find all 'Cpu Cooler Liquid' documents in the MongoDB collection
    let getCpuCoolerLiquid = await CpuCoolerLiquid.find({});
    let sendCpuCoolerLiquid = [];
    for (let model of getCpuCoolerLiquid) {
      sendCpuCoolerLiquid.push(model.model);
    }
    // Find all 'Fans' documents in the MongoDB collection
    let getFans = await Fans.find({});
    let sendFans = [];
    for (let model of getFans) {
      sendFans.push(model.model);
    }
    // Find all 'Gpu' documents in the MongoDB collection
    let getGpu = await Gpu.find({});
    let sendGpu = [];
    for (let model of getGpu) {
      sendGpu.push(model.model);
    }
    // Find all 'Motherboard' documents in the MongoDB collection
    let getMotherboard = await Motherboard.find({});
    let sendMotherboard = [];
    for (let model of getMotherboard) {
      sendMotherboard.push(model.model);
    }
    // Find all 'Psu' documents in the MongoDB collection
    let getPsu = await Psu.find({});
    let sendPsu = [];
    for (let model of getPsu) {
      sendPsu.push(model.model);
    }
    // Find all 'Ram' documents in the MongoDB collection
    let getRam = await Ram.find({});
    let sendRam = [];
    for (let model of getRam) {
      sendRam.push(model.model);
    }
    // Find all 'SsdM2' documents in the MongoDB collection
    let getSsdM2 = await SsdM2.find({});
    let sendSsdM2 = [];
    for (let model of getSsdM2) {
      sendSsdM2.push(model.model);
    }
    // Find all 'SsdSata' documents in the MongoDB collection
    let getSsdSata = await SsdSata.find({});
    let sendSsdSata = [];
    for (let model of getSsdSata) {
      sendSsdSata.push(model.model);
    }

    // Send all arrays of 'Components' documents as the response
    res.send({
      case: sendCase,
      cpu: sendCpu,
      cpuCoolerFan: sendCpuCoolerFan,
      cpuCoolerLiquid: sendCpuCoolerLiquid,
      fans: sendFans,
      gpu: sendGpu,
      motherboard: sendMotherboard,
      psu: sendPsu,
      ram: sendRam,
      ssdM2: sendSsdM2,
      ssdSata: sendSsdSata,
    });
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

module.exports = router;
