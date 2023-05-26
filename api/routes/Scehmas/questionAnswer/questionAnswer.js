// Import mongo
const mongoose = require('mongoose');

// define user type data
const questionAnswerScehma = new mongoose.Schema(
  {
    date: Date,
    fullName: String,
    email: { type: String, unique: true },
    answer: String,
    question: String,
    review: String,
  },
  {
    collection: 'QuestionAnswer',
  }
);

mongoose.model('QuestionAnswer', questionAnswerScehma);
