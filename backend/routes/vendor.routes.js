const express = require('express');
const router = express.Router();

const { body } = require('express-validator');
const vendorController =  require('../controllers/vendor.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Vendor Registration
router.post('/register', [
    body('companyName').notEmpty().withMessage('Company name is required'), 
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('contactNumber').notEmpty().withMessage('Contact number is required')
], vendorController.registerVendor);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],
vendorController.loginVendor
);

router.get('/profile', authMiddleware.authVendor, vendorController.getVendorProfile);

router.get('/logout', authMiddleware.authVendor, vendorController.logoutVendor);

module.exports = router;