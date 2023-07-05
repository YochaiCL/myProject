const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import Motherboard data from database Motherboard
///////////////////////////////////////////////////////////////////////////////

const Motherboard = mongoose.model('Motherboard');
// Import scehma of how Motherboard is in database
require('../../Scehmas/addComponents/motherboard/motherboard');
/**
 * Description - This function update motherboard component
 * req - All motherboard data from the client
 * res - Send status of update in database
 */
router.post('/motherboard', async (req, res) => {
  // console.log(req.body.newComponent);
  try {
    await Motherboard.updateOne(
      { model: req.body.model },
      req.body.newComponent
    );
    res.send({ status: 'true' });
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
 * Description - This function update cpu component
 * req - All cpu data from the client
 * res - Send status of update in database
 */

router.post('/cpu', async (req, res) => {
  try {
    await Cpu.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update case component
 * req - All case data from the client
 * res - Send status of update in database
 */
router.post('/case', async (req, res) => {
  try {
    await Case.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update gpu component
 * req - All gpu data from the client
 * res - Send status of update in database
 */
router.post('/gpu', async (req, res) => {
  try {
    await Gpu.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update cpuCooleFan component
 * req - All cpuCooleFan data from the client
 * res - Send status of update in database
 */
router.post('/cpuCoolerFan', async (req, res) => {
  try {
    await CpuCoolerFan.updateOne(
      { model: req.body.model },
      req.body.newComponent
    );

    res.send({ status: 'true' });
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
 * Description - This function update cpuCoolerLiquid component
 * req - All cpuCoolerLiquid data from the client
 * res - Send status of update in database
 */
router.post('/cpuCoolerLiquid', async (req, res) => {
  try {
    await CpuCoolerLiquid.updateOne(
      { model: req.body.model },
      req.body.newComponent
    );
    res.send({ status: 'true' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

//////////////////////////////////////////////////////////////////////////////
// Import Fans data from database mongoDB
const Fans = mongoose.model('Fans');
// Import scehma of how data is in database
require('../../Scehmas/addComponents/fans/fans');

/**
 * Description - This function update fans component
 * req - All fans data from the client
 * res - Send status of update in database
 */
router.post('/fans', async (req, res) => {
  try {
    await Fans.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update psu component
 * req - All psu data from the client
 * res - Send status of update in database
 */
router.post('/psu', async (req, res) => {
  try {
    await Psu.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update ram component
 * req - All ram data from the client
 * res - Send status of update in database
 */
router.post('/ram', async (req, res) => {
  try {
    await Ram.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update ssdM2 component
 * req - All ssdM2 data from the client
 * res - Send status of update in database
 */
router.post('/ssdM2', async (req, res) => {
  try {
    await SsdM2.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
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
 * Description - This function update SsdSata component
 * req - All SsdSata data from the client
 * res - Send status of update in database
 */
router.post('/ssdSata', async (req, res) => {
  try {
    await SsdSata.updateOne({ model: req.body.model }, req.body.newComponent);
    res.send({ status: 'true' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
