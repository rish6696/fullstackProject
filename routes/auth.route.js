import express from 'express'
import authController from '../controllers/auth.controller'
import middleware from '../middlewares/index'
import authMiddleWare from '../middlewares/authMiddlewares'
const validator = require('express-joi-validation').createValidator({})
 
import authValidator from '../validators/auth.validator'


const router=express.Router();

router.route('/getUser')
.post(authController.getUser)

router.route('/loginGoogle')
.post(validator.body(authValidator.loginGoogle),authController.loginGoogle,middleware.assignJWTMiddleware())


router.route('/loginLocal')
.post(validator.body(authValidator.loginLocalValidation),authController.loginLocal,middleware.assignJWTMiddleware())


router.route('/signUp')
.post(validator.body(authValidator.signUpValidation),authController.SignUpHandler,middleware.assignJWTMiddleware())

export default router