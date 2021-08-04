const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  picture : { type: String },
  googleId: { type: String },
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;