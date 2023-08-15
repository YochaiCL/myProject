const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Import Assemblies data from database mongoDB
const TestYourSelf = mongoose.model('TestYourSelf');

/**
 * Description - This function send all data in the server to the client
 * res - Send array of all data in the server
 */
router.post('/getTests', async (req, res) => {
  const userId = req.body.userId;
  // console.log(userId);
  try {
    let array = await TestYourSelf.find({ userId });
    // console.log(array);
    res.send(array);
  } catch (error) {
    res.send({ status: 'error' });
  }
});

/**
 * Description - This function delete the selected test from the database
 */
router.post('/deleteTest', async (req, res) => {
  const userId = req.body.userId;
  const testName = req.body.testName;
  try {
    const deletedTest = await TestYourSelf.findOneAndDelete({
      userId,
      testName,
    });
    if (deletedTest) {
      res.send({ status: 'Test deleted' });
    } else {
      res.send({ status: 'Test not found' });
    }
  } catch (error) {
    // Send a response with a 'status' property set to 'error' indicating an error occurred
    res.send({ status: 'error' });
  }
});

const nodemailer = require('nodemailer');

/**
 * Description - This function delete the selected test from the database
 */
router.post('/sendByEmail', async (req, res) => {
  const userEmail = req.body.userEmail;
  const testData = req.body.testData;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pcbuilderweb@gmail.com',
      pass: 'oggemnxdvgbieqcy',
    },
  });

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: userEmail,
    subject: 'PC Builder',
    text: `Your Test data is:\nTest Name: ${testData.testName}\nMotherboard: ${testData.modelMotherboard}\nCPU: ${testData.modelCPU}\nCPU Cooler: ${testData.modelCPUCooler}\nGPU: ${testData.modelGPU}\nPSU: ${testData.modelPSU}\nRAM: ${testData.modelRAM}\nSSD: ${testData.modelSSD}\nCase: ${testData.modelCase}\nThank you,\nPc Builder`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.json({ status: 'Error email not send' });
    } else {
      return res.json({ status: 'Email send' });
    }
  });
});

module.exports = router;
