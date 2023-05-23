// Import mongo
const mongoose = require('mongoose');

// define case type data
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
