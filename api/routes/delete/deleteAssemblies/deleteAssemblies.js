const { router, mongoose } = require('../../commonImports/commonImports');
// Import Motherboard data from database Motherboard
const Assemblies = mongoose.model('Assemblies');

/**
 * Description - This function delete the selected assembly from the database
 */
router.post('/', async (req, res) => {
  try {
    await Assemblies.findOneAndDelete({ assemblyName: req.body.assemblyName });
    res.send({ status: 'Assembly deleted ' });
  } catch (error) {
    res.send({ status: 'error' });
  }
});

module.exports = router;
