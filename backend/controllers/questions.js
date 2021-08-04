let Question = require('../models/question.model');
var mongoose = require('mongoose');

const getQuestions = async (req,res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
}

const getOneQuestion = async (req,res) => {
    Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error : ' + err));
}

const postQuestion = async (req,res) => {
    const username = req.body.username;
    const title = req.body.title;
    const category = req.body.category;
    const description = req.body.description;
    const answers = req.body.answers;
    const picture = req.body.picture;
    const googleId = req.body.googleId;

    const newQuestion = new Question({
      username,
      title,
      category,
      description,
      answers,
      picture,
      googleId
    });
  
    newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));    
}

const getOwnQuestions = async (req,res) => {
    const { googleId } = req.params;

    Question.find({googleId: googleId})
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error : ' + err));

}

module.exports = {
    getQuestions,
    getOneQuestion,
    postQuestion,
    getOwnQuestions,
};