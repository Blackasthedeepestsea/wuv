const express = require('express');

const router = express.Router();

const {
  getChallenge,
  setChallenge,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challengeController');

const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getChallenge).post(protect, setChallenge);
router
  .route('/:id')
  .delete(protect, deleteChallenge)
  .put(protect, updateChallenge);

module.exports = router;
