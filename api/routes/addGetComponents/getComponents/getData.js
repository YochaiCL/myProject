// Import express
const express = require('express');

const router = express.Router();

// Import mongoose
const mongoose = require('mongoose');

// Import Motherboard  data from database mongoDB
const Motherboard = mongoose.model('Motherboard');
// The GET request is used to retrieve data from the server. It is commonly used for fetching or reading resources.
router.get('/motherboard', async (req, res) => {
  try {
    // Find all 'Motherboard' documents in the MongoDB collection
    let array = await Motherboard.find({});
    // Send the array of 'Motherboard' documents as the response
    res.send(array);
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

// Import Gpu data from database mongoDB
const Gpu = mongoose.model('Gpu');

router.get('/gpu', async (req, res) => {
  try {
    let array = await Gpu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import Fans data from database mongoDB
const Fans = mongoose.model('Fans');

router.get('/fans', async (req, res) => {
  try {
    let array = await Fans.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import Case data from database mongoDB
const Case = mongoose.model('Case');

router.get('/case', async (req, res) => {
  try {
    let array = await Case.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import Cpu data from database mongoDB
const Cpu = mongoose.model('Cpu');

router.get('/cpu', async (req, res) => {
  try {
    let array = await Cpu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import Psu data from database mongoDB
const Psu = mongoose.model('Psu');

router.get('/psu', async (req, res) => {
  try {
    let array = await Psu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import Ram data from database mongoDB
const Ram = mongoose.model('Ram');

router.get('/ram', async (req, res) => {
  try {
    let array = await Ram.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import SsdSata data from database mongoDB
const SsdSata = mongoose.model('SsdSata');

router.get('/ssdSata', async (req, res) => {
  try {
    let array = await SsdSata.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import SsdM2 data from database mongoDB
const SsdM2 = mongoose.model('SsdM2');

router.get('/ssdM2', async (req, res) => {
  try {
    let array = await SsdM2.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import CpuCoolerFan data from database mongoDB
const CpuCoolerFan = mongoose.model('CpuCoolerFan');

router.get('/cpuCoolerFan', async (req, res) => {
  try {
    let array = await CpuCoolerFan.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

// Import CpuCoolerLiquid data from database mongoDB
const CpuCoolerLiquid = mongoose.model('CpuCoolerLiquid');

router.get('/cpuCoolerLiquid', async (req, res) => {
  try {
    let array = await CpuCoolerLiquid.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
