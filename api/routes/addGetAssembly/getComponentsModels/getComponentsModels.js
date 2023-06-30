const express = require('express');
const router = express.Router();
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

/**
 * Description - This function send to the client all model of all components
 * res - All components models
 */
router.get('/', async (req, res) => {
  try {
    //////////////////////////////////////////////////////////////////////////////
    let getCase = await Case.find({});
    let sendCase = [];
    for (let model of getCase) {
      sendCase.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getCpu = await Cpu.find({});
    let sendCpu = [];
    for (let model of getCpu) {
      sendCpu.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getCpuCoolerFan = await CpuCoolerFan.find({});
    let sendCpuCoolerFan = [];
    for (let model of getCpuCoolerFan) {
      sendCpuCoolerFan.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getCpuCoolerLiquid = await CpuCoolerLiquid.find({});
    let sendCpuCoolerLiquid = [];
    for (let model of getCpuCoolerLiquid) {
      sendCpuCoolerLiquid.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getFans = await Fans.find({});
    let sendFans = [];
    for (let model of getFans) {
      sendFans.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getGpu = await Gpu.find({});
    let sendGpu = [];
    for (let model of getGpu) {
      sendGpu.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getMotherboard = await Motherboard.find({});
    let sendMotherboard = [];
    for (let model of getMotherboard) {
      sendMotherboard.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getPsu = await Psu.find({});
    let sendPsu = [];
    for (let model of getPsu) {
      sendPsu.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getRam = await Ram.find({});
    let sendRam = [];
    for (let model of getRam) {
      sendRam.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getSsdM2 = await SsdM2.find({});
    let sendSsdM2 = [];
    for (let model of getSsdM2) {
      sendSsdM2.push(model.model);
    }
    //////////////////////////////////////////////////////////////////////////////
    let getSsdSata = await SsdSata.find({});
    let sendSsdSata = [];
    for (let model of getSsdSata) {
      sendSsdSata.push(model.model);
    }
    res.send({
      Case: sendCase,
      Cpu: sendCpu,
      CpuCoolerFan: sendCpuCoolerFan,
      CpuCoolerLiquid: sendCpuCoolerLiquid,
      Fans: sendFans,
      Gpu: sendGpu,
      Motherboard: sendMotherboard,
      Psu: sendPsu,
      Ram: sendRam,
      SsdM2: sendSsdM2,
      SsdSata: sendSsdSata,
    });
  } catch (error) {
    res.send({ status: 'error' });
  }
});
module.exports = router;
