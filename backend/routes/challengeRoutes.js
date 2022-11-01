const express = require('express');

const router = express.Router();

const {
  getChallenge,
  setChallenge,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challengeController');

router.route('/').get(getChallenge).post(setChallenge);
router.route('/:id').delete(deleteChallenge).put(updateChallenge);

module.exports = router;
