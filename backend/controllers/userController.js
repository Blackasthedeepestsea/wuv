const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc register New user
// @route POST /api/user
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const {username, email, password} = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields!');
  }

  //check if user exists
  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400);
    throw new Error('User already exists!');
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
});

// @desc authenticate New user
// @route POST /api/user/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  res.json({message: 'Login User'});
});

// @desc Get user data
// @route GET /api/user/me
// @access Public

const getMe = asyncHandler(async (req, res) => {
  res.json({message: 'User data display'});
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
