const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user.controller');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('mobile')
      .isLength({ min: 10, max: 10 })
      .withMessage('Mobile must be 10 digits long'),
  ],
  userController.registerUser 
);

module.exports = router; 
