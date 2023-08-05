const mongoose = require('mongoose');

/**
 * Description - Define the question/answer scehma
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
    selectedStars: Number,
  },
  {
    collection: 'QuestionAnswer',
  }
);

mongoose.model('QuestionAnswer', questionAnswerScehma);
