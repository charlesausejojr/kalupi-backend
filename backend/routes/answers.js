const router = require('express').Router();

var action = require('../controllers/answers');

router.get('/',action.getAnswers);
router.get('/:id',action.getQuestionAnswers);
router.get('/yourAnswers/:googleId',action.getOwnAnswers);
router.post('/',action.postAnswers);


module.exports = router;