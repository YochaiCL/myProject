const { router, mongoose } = require('../../commonImports/commonImports');
const Assemblies = mongoose.model('Assemblies');
require('../../Scehmas/addAssemblies/addAssembliesScehmas');

/**
 * Description - This function add assembly to the database
 * req - receive the assembly data from the client
 * res - if the assembly name already exist the assembly will not add otherwise it will add
 */
router.post('/', async (req, res) => {
  try {
    let array = await Assemblies.find({ assemblyName: req.body.assemblyName });
    if (array.length > 0) {
      res.send({ status: 'Assembly already exist' });
      return;
    } else {
      await Assemblies.create(req.body);
      res.send({ status: 'ok' });
    }
  } catch (error) {
    res.send({ status: 'error' });
  }
});
module.exports = router;
