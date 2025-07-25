const express = require('express');
const router = express.Router();
const { signup, login } = require('../controller/user.controller');
const { body } = require('express-validator');

// Test route
router.get('/', (req, res) => {
  res.send('👋 Hello from user route!');
});

router.post(
  '/signup',
  [
    body('name')
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
    
    body('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please enter a valid email'),
    
    body('password')
      .notEmpty().withMessage('Password is required')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  signup
);

// 🔐 Login Route
router.post(
  '/login',
  [
    body('email')
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please enter a valid email'),

    body('password')
      .notEmpty().withMessage('Password is required')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  login
);

module.exports = router;
