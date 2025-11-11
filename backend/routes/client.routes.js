const express = require('express');
const router = express.Router();

const {body} = require('express-validator');
const clientController = require('../controllers/client.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
],
clientController.registerClient
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],
clientController.loginClient
);

router.get('/profile', authMiddleware.authClient, clientController.getClientProfile);

router.get('/logout', authMiddleware.authClient, clientController.logoutClient);

module.exports = router;