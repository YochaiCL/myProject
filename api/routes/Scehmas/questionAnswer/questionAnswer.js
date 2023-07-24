const mongoose = require('mongoose');

/**
 * Description -
 */
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
