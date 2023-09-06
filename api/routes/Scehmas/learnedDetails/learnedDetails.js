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
    },
    case: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
    cpu: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
    cpuCooler: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
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
      haveNewComponent: Boolean,
      comment: String,
    },
    hd: {
      haveLearned: Boolean,
      comment: String,
    },
    motherboard: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
    psu: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
    ram: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
    ssd: {
      haveLearned: Boolean,
      haveNewComponent: Boolean,
      comment: String,
    },
  },
  {
    collection: 'CompLearned',
  }
);

mongoose.model('CompLearned', compLearnedScehma);
