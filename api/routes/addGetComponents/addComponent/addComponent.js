const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import CompLearned data from database
const CompLearned = mongoose.model('CompLearned');

// Import scehma of how data is in database
require('../../Scehmas/learnedDetails/learnedDetails');

////////////////////////////////////////////////////////////////////////////////

// Import Motherboard data from database Motherboard
const Motherboard = mongoose.model('Motherboard');

// Import scehma of how Motherboard is in database
require('../../Scehmas/addComponents/motherboard/motherboard');

/**
 * Description - This function create new motherboard component and set that have new component
 * req - All motherboard data from the client
 * res - Send status of creation in database
 */
router.post('/motherboard', async (req, res) => {
  try {
    let array = await Motherboard.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Motherboard.create(req.body);
      await CompLearned.updateMany(
        {},
        { 'motherboard.haveNewComponent': true }
      );
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

///////////////////////////////////////////////////////////////////////////////
// Import Cpu data from database Cpu
const Cpu = mongoose.model('Cpu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpu/cpu');

/**
 * Description - This function create new cpu component and set have new component
 * req - All cpu data from the client
 * res - Send status of creation in database
 */
router.post('/cpu', async (req, res) => {
  try {
    let array = await Cpu.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Cpu.create(req.body);
      await CompLearned.updateMany({}, { 'cpu.haveNewComponent': true });
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

/**
 * Description - This function create new case component and set have new component
 * req - All case data from the client
 * res - Send status of creation in database
 */
router.post('/case', async (req, res) => {
  try {
    let array = await Case.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Case.create(req.body);
      await CompLearned.updateMany({}, { 'case.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Gpu data from database mongoDB
const Gpu = mongoose.model('Gpu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/gpu/gpu');

/**
 * Description - This function create new gpu component and set have new component
 * req - All gpu data from the client
 * res - Send status of creation in database
 */
router.post('/gpu', async (req, res) => {
  try {
    let array = await Gpu.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Gpu.create(req.body);
      await CompLearned.updateMany({}, { 'gpu.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Cpu Cooler Fan data from database mongoDB
const CpuCoolerFan = mongoose.model('CpuCoolerFan');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpuCooler/cpuCoolerFan/cpuCoolerFan');

/**
 * Description - This function create new cpuCoolerFan component and set have new component
 * req - All cpuCoolerFan data from the client
 * res - Send status of creation in database
 */
router.post('/cpuCoolerFan', async (req, res) => {
  try {
    let array = await CpuCoolerFan.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await CpuCoolerFan.create(req.body);
      await CompLearned.updateMany({}, { 'cpuCooler.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Cpu Cooler Liquid data from database mongoDB
const CpuCoolerLiquid = mongoose.model('CpuCoolerLiquid');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/cpuCooler/cpuCoolerLiquid/cpuCoolerLiquid');

/**
 * Description - This function create new cpuCoolerLiquid component and set have new component
 * req - All cpuCoolerLiquid data from the client
 * res - Send status of creation in database
 */
router.post('/cpuCoolerLiquid', async (req, res) => {
  try {
    let array = await CpuCoolerLiquid.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await CpuCoolerLiquid.create(req.body);
      await CompLearned.updateMany({}, { 'cpuCooler.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Psu data from database mongoDB
const Psu = mongoose.model('Psu');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/psu/psu');

/**
 * Description - This function create new psu component and set have new component
 * req - All psu data from the client
 * res - Send status of creation in database
 */
router.post('/psu', async (req, res) => {
  try {
    let array = await Psu.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Psu.create(req.body);
      await CompLearned.updateMany({}, { 'psu.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ram data from database mongoDB
const Ram = mongoose.model('Ram');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ram/ram');

/**
 * Description - This function create new ram component and set have new component
 * req - All ram data from the client
 * res - Send status of creation in database
 */
router.post('/ram', async (req, res) => {
  try {
    let array = await Ram.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await Ram.create(req.body);
      await CompLearned.updateMany({}, { 'ram.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ssd M2 data from database mongoDB
const SsdM2 = mongoose.model('SsdM2');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ssd/ssdM2/ssdM2');

/**
 * Description - This function create new ssdM2 component and set have new component
 * req - All ssdM2 data from the client
 * res - Send status of creation in database
 */
router.post('/ssdM2', async (req, res) => {
  try {
    let array = await SsdM2.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await SsdM2.create(req.body);
      await CompLearned.updateMany({}, { 'ssd.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Ssd Sata data from database mongoDB
const SsdSata = mongoose.model('SsdSata');

// Import scehma of how data is in database
require('../../Scehmas/addComponents/ssd/ssdSata/ssdSata');

/**
 * Description - This function create new SsdSata component and set have new component
 * req - All SsdSata data from the client
 * res - Send status of creation in database
 */
router.post('/ssdSata', async (req, res) => {
  try {
    let array = await SsdSata.find({ model: req.body.model });
    if (array.length > 0) {
      res.send({ status: 'Model already exist' });
      return;
    } else {
      await SsdSata.create(req.body);
      await CompLearned.updateMany({}, { 'ssd.haveNewComponent': true });
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
