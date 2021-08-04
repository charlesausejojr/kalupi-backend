let Answer = require('../models/answer.model');
var mongoose = require('mongoose');

const getAnswers = async (req,res) => {
    Answer.find()
    .then(answers => res.json(answers))
    .catch(err => res.status(400).json('Error: ' + err));
}

const postAnswers = async (req,res) => {
    const questionId = req.body.questionId;
    const name = req.body.name;
    const answer = req.body.answer;
    const picture = req.body.picture;
    const googleId = req.body.googleId;

    const newAnswer = new Answer({
            questionId,
            name,
            answer,
            picture,
            googleId
    });
  
    newAnswer.save()
    .then(() => res.json('Answer added!'))
    .catch(err => res.status(400).json('Error: ' + err));    
}

const getQuestionAnswers = async (req,res) => {
    Answer.find({questionId: req.params.id})
    .then(answer => res.json(answer))
    .catch(err => res.status(400).json('Error : ' + err));
}

const getOwnAnswers= async (req,res) => {
    const { googleId } = req.params;

    Answer.find({googleId: googleId})
    .then(answer => res.json(answer))
    .catch(err => res.status(400).json('Error : ' + err));

}
module.exports = {
    getAnswers,
    postAnswers,
    getQuestionAnswers,
    getOwnAnswers
};