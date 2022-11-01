const asyncHandler = require('express-async-handler');

const Challenge = require('../models/challengeModel');
// @desc get challenge
// @route GET /api/challenge
// @access Private

const getChallenge = asyncHandler(async (req, res) => {
  const challenges = await Challenge.find();
  res.status(200).json(challenges);
});

// @desc set challenge
// @route POST /api/challenge
// @access Private

const setChallenge = asyncHandler(async (req, res) => {
  console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error('please add a challenge');
  }

  const challenges = await Challenge.create({
    text: req.body.text,
  });
  res.status(200).json(challenges);
});

// @desc update challenge
// @route UPDATE /api/challenge/:id
// @access Private

const updateChallenge = asyncHandler(async (req, res) => {
  const challenges = await Challenge.findById(req.params.id);
  if (!challenges) {
    res.status(400);
    throw new Error('Challenge not found');
  }

  const updatedChallenge = await Challenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  );
  res.status(200).json(updatedChallenge);
});

// @desc delete challenge
// @route DELETE /api/challenge/:id
// @access Private

const deleteChallenge = asyncHandler(async (req, res) => {
  const challenges = await Challenge.findById(req.params.id);
  if (!challenges) {
    res.status(400);
    throw new Error('Challenge not found');
  }

  await challenges.remove();
  res.status(200).json({id: req.params.id});
});

module.exports = {
  getChallenge,
  setChallenge,
  updateChallenge,
  deleteChallenge,
};
