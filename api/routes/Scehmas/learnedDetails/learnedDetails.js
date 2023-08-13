const mongoose = require('mongoose');

/**
 * Description - Define the learned scehma
 */
const compLearnedScehma = new mongoose.Schema(
  {
    userId: String,
    cables: {
      haveLearned: Boolean,
      comment: String,
      new: {
        type: Boolean,
        required: false,
      },
    },
    case: {
      haveLearned: Boolean,
      comment: String,
    },
    cpu: {
      haveLearned: Boolean,
      comment: String,
    },
    cpuCooler: {
      haveLearned: Boolean,
      comment: String,
    },
    dvd: {
      haveLearned: Boolean,
      comment: String,
    },
    fans: {
      haveLearned: Boolean,
      comment: String,
    },
    gpu: {
      haveLearned: Boolean,
      comment: String,
    },
    hd: {
      haveLearned: Boolean,
      comment: String,
    },
    motherboard: {
      haveLearned: Boolean,
      comment: String,
    },
    psu: {
      haveLearned: Boolean,
      comment: String,
    },
    ram: {
      haveLearned: Boolean,
      comment: String,
    },
    ssd: {
      haveLearned: Boolean,
      comment: String,
    },
  },
  {
    collection: 'CompLearned',
  }
);

mongoose.model('CompLearned', compLearnedScehma);
