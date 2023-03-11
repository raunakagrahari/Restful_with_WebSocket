const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const { validationMiddleware, authMiddleware } = require('./../../middlewares');
const { signUpSchema, loginSchema } = require('./user.validation');


router.post('/signup',validationMiddleware(signUpSchema) ,userController.signUp );
router.post('/login',authMiddleware(['user']), validationMiddleware(loginSchema), userController.login);
router.patch('/updateProfile/:id', authMiddleware(['user']), userController.updateProfile);
router.post('/logout/:id', authMiddleware(['user']), userController.logout);


module.exports = router;