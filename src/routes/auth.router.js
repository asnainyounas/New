const {Router} = require('express')
const authRouter = Router()
const authController = require('../controller/auth.controller')

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.get('/get-me', authController.getMe)
authRouter.get('/refresh-token', authController.RefreshToken)
authRouter.post('/logout', authController.logout)
authRouter.post('/logout-all', authController.logoutAll)
authRouter.post('/verify-email', authController.verifyEmail)
authRouter.post('/resend-otp', authController.resendOtp)

module.exports = authRouter