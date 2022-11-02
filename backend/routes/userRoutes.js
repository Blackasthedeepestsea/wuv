const express = require('express');

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getMe);
//router.route('/').get(getChallenge).post(setChallenge);
//router.route('/:id').delete(deleteChallenge).put(updateChallenge);

module.exports = router;
