const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  questionId: { type: String },
  answer: { type: String },
  googleId: { type: String },
  picture: { type: String },
  name: { type: String }
}, {
  timestamps: true,
}
);

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;