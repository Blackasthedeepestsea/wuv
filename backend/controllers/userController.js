// @desc register New user
// @route POST /api/user
// @access Public

const registerUser = (req, res) => {
  res.json({message: 'Register User'});
};

// @desc authenticate New user
// @route POST /api/user/login
// @access Public

const loginUser = (req, res) => {
  res.json({message: 'Login User'});
};

// @desc Get user data
// @route GET /api/user/me
// @access Public

const getMe = (req, res) => {
  res.json({message: 'User data display'});
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
