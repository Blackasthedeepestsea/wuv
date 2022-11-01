// @desc get challenge
// @route GET /api/challenge
// @access Private

const getChallenge = (req, res) => {
  res.status(200).json({message: 'get challenge'});
};

// @desc set challenge
// @route POST /api/challenge
// @access Private

const setChallenge = (req, res) => {
  res.status(200).json({message: 'set challenge'});
};

// @desc update challenge
// @route UPDATE /api/challenge/:id
// @access Private

const updateChallenge = (req, res) => {
  res.status(200).json({message: `update challenge ${req.params.id}`});
};

// @desc delete challenge
// @route DELETE /api/challenge/:id
// @access Private

const deleteChallenge = (req, res) => {
  res.status(200).json({message: `delete challenge ${req.params.id}`});
};

module.exports = {
  getChallenge,
  setChallenge,
  updateChallenge,
  deleteChallenge,
};
