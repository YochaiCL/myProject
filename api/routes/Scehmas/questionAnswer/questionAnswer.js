const mongoose = require('mongoose');

/**
 * Description -
 */
const questionAnswerScehma = new mongoose.Schema(
  {
    userId: String,
    userFullName: String,
    userEmail: String,
    questionName: String,
    questionText: String,
    answerText: String,
    haveAnAnswer: Boolean,
    scoreResult:Number,
  },
  {
    collection: 'QuestionAnswer',
  }
);

mongoose.model('QuestionAnswer', questionAnswerScehma);
