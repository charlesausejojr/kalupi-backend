let Question = require('../models/question.model');

const getQuestions = (req,res) => {
    Question.find()
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json('Error: ' + err));
}

const getOneQuestion = (req,res) => {
    Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error : ' + err));
}

const postQuestion = (req,res) => {
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

const updateQuestion = async (req,res) => {
    // rename id to _id
    const { id: _id } = req.params;
    const question = req.body;

    if(!mongoose.types.ObjectId.isvalid(_id)) return res.status(404).send('Id not found');

    const updatedQuestion = Question.findByIdAndUpdate(_id, question, {new: true});
    res.json(updatedQuestion);
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
    updateQuestion,
    getOwnQuestions
};