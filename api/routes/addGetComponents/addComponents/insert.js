// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

///////////////////////////////////////////////////////////////////////////////

// Import Motherboard data from database Motherboard
const Motherboard = mongoose.model('Motherboard');

// Import scehma of how Motherboard is in database
require('../../Scehmas/addComponents/motherboard/motherboard');

// req represents the request object containing data sent from the client

// res represents the response object used to send a response back to the client.

router.post('/motherboard', async (req, res) => {
  try {
    // Create a new 'Motherboard' document in the MongoDB collection using the data sent in the request body
    await Motherboard.create(req.body);
    // Send a response with a 'status' property set to 'ok' indicating successful creation
    res.send({ status: 'ok' });
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Cpu data from database Cpu
const Cpu = mongoose.model('Cpu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpu/cpu');

router.post('/cpu', async (req, res) => {
  try {
    let array = await Cpu.find({model : req.body.model})
    if(array.length > 0){
      res.send({status : "Model already exist"});
      return
    } else {
      await Cpu.create(req.body);
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Case data from database mongoDB
const Case = mongoose.model('Case');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/case/case');

router.post('/case', async (req, res) => {
  try {
    await Case.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Gpu data from database mongoDB
const Gpu = mongoose.model('Gpu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/gpu/gpu');

router.post('/gpu', async (req, res) => {
  try {
    await Gpu.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Cpu Cooler Fan data from database mongoDB
const CpuCoolerFan = mongoose.model('CpuCoolerFan');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpuCooler/cpuCoolerFan/cpuCoolerFan');

router.post('/cpuCooleFan', async (req, res) => {
  try {
    await CpuCoolerFan.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Cpu Cooler Liquid data from database mongoDB
const CpuCoolerLiquid = mongoose.model('CpuCoolerLiquid');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpuCooler/cpuCoolerLiquid/cpuCoolerLiquid');

router.post('/cpuCoolerLiquid', async (req, res) => {
  try {
    await CpuCoolerLiquid.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Fans data from database mongoDB
const Fans = mongoose.model('Fans');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/fans/fans');

router.post('/fans', async (req, res) => {
  try {
    await Fans.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Psu data from database mongoDB
const Psu = mongoose.model('Psu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/psu/psu');

router.post('/psu', async (req, res) => {
  try {
    await Psu.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ram data from database mongoDB
const Ram = mongoose.model('Ram');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ram/ram');

router.post('/ram', async (req, res) => {
  try {
    await Ram.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ssd M2 data from database mongoDB
const SsdM2 = mongoose.model('SsdM2');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ssd/ssdM2/ssdM2');

router.post('/ssdM2', async (req, res) => {
  try {
    await SsdM2.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ssd Sata data from database mongoDB
const SsdSata = mongoose.model('SsdSata');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ssd/ssdSata/ssdSata');

router.post('/ssdSata', async (req, res) => {
  try {
    await SsdSata.create(req.body);
    res.send({ status: 'ok' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
