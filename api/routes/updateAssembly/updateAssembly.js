const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Assemblies = mongoose.model('Assemblies');
require('../Scehmas/addAssemblies/addAssembliesScehmas');

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    await Assemblies.updateOne({
      assemblyName: req.body.assemblyName,
    } , req.body.newAssembly
    );
   res.send({ status: 'true' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});
module.exports = router;