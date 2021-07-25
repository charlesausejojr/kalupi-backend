const router = require('express').Router();

var action = require('../controllers/questions');

router.get('/',action.getQuestions);
router.get('/:id',action.getOneQuestion);
router.get('/yourQuestions/:googleId',action.getOwnQuestions);
router.post('/',action.postQuestion);
router.patch('/:id',action.updateQuestion);

module.exports = router;