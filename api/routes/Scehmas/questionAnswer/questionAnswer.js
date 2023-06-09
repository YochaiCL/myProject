// Import mongo
const mongoose = require('mongoose');

// define user type data
const questionAnswerScehma = new mongoose.Schema(
  {
    userId: String,
    questionName: String,
    questionText: String,
  },
  {
    collection: 'QuestionAnswer',
  }
);

mongoose.model('QuestionAnswer', questionAnswerScehma);
