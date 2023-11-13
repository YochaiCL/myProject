const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

///////////////////////////////////////////////////////////////////////////////

// Import Motherboard data from database mongoDB
const Motherboard = mongoose.model('Motherboard');

/**
 * Description - This function sand array of all data in motherboard database
 * res - array of motherboard from database
 */
router.get('/motherboard', async (req, res) => {
  try {
    let array = await Motherboard.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Gpu data from database mongoDB
const Gpu = mongoose.model('Gpu');

/**
 * Description - This function sand array of all data in gpu database
 * res - array of gpu from database
 */
router.get('/gpu', async (req, res) => {
  try {
    let array = await Gpu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Case data from database mongoDB
const Case = mongoose.model('Case');

/**
 * Description - This function sand array of all data in case database
 * res - array of case from database
 */
router.get('/case', async (req, res) => {
  try {
    let array = await Case.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Cpu data from database mongoDB
const Cpu = mongoose.model('Cpu');

/**
 * Description - This function sand array of all data in cpu database
 * res - array of cpu from database
 */
router.get('/cpu', async (req, res) => {
  try {
    let array = await Cpu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Psu data from database mongoDB
const Psu = mongoose.model('Psu');

/**
 * Description - This function sand array of all data in psu database
 * res - array of psu from database
 */
router.get('/psu', async (req, res) => {
  try {
    let array = await Psu.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Ram data from database mongoDB
const Ram = mongoose.model('Ram');

/**
 * Description - This function sand array of all data in ram database
 * res - array of ram from database
 */
router.get('/ram', async (req, res) => {
  try {
    let array = await Ram.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import SsdSata data from database mongoDB
const SsdSata = mongoose.model('SsdSata');

/**
 * Description - This function sand array of all data in ssdSata database
 * res - array of ssdSata from database
 */
router.get('/ssdSata', async (req, res) => {
  try {
    let array = await SsdSata.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import SsdM2 data from database mongoDB
const SsdM2 = mongoose.model('SsdM2');

/**
 * Description - This function sand array of all data in ssdM2 database
 * res - array of ssdM2 from database
 */
router.get('/ssdM2', async (req, res) => {
  try {
    let array = await SsdM2.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import CpuCoolerFan data from database mongoDB
const CpuCoolerFan = mongoose.model('CpuCoolerFan');

/**
 * Description - This function sand array of all data in cpuCoolerFan database
 * res - array of cpuCoolerFan from database
 */
router.get('/cpuCoolerFan', async (req, res) => {
  try {
    let array = await CpuCoolerFan.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import CpuCoolerLiquid data from database mongoDB
const CpuCoolerLiquid = mongoose.model('CpuCoolerLiquid');

/**
 * Description - This function sand array of all data in cpuCoolerLiquid database
 * res - array of cpuCoolerLiquid from database
 */
router.get('/cpuCoolerLiquid', async (req, res) => {
  try {
    let array = await CpuCoolerLiquid.find({});
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
