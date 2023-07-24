const mongoose = require('mongoose');

/**
 * Description - Define the case scehma
 */
const caseScehma = new mongoose.Schema(
  {
    model: String,
    form: String,
    radiator_compatibility: String,
    dimensions: String,
  },
  {
    collection: 'Case',
  }
);

mongoose.model('Case', caseScehma);
