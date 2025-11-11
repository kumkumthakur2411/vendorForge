const vendorModel = require('../models/vendor.model');
const vendorServices = require('../services/vendor.services');
const { validationResult } = require('express-validator');

const blacklistTokenModel = require('../models/blacklistToken.model');

const registerVendor = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { companyName, email, password, contactNumber, address } = req.body;

    const isExistingVendor = await vendorModel.findOne({ email });
    if (isExistingVendor) {
        return res.status(409).json({ message: 'Vendor with this email already exists' });
    }

    const hashedPassword = await vendorModel.hashPassword(password);
    const vendor = await vendorServices.createVendor({
        companyName,
        email,  
        password: hashedPassword,
        contactNumber,
        address
    });

    const token = vendor.generateAuthToken();
    res.status(201).json({ vendor, token });
};
const loginVendor = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    
    const vendor = await vendorModel.findOne({ email }).select('+password');

    if (!vendor) {
        return res.status(401).json({ message: 'invalid email or password' });

    }
    const isPasswordValid = await vendor.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'invalid email or password' });
    }
    const token = vendor.generateAuthToken();
    res.cookie('token', token);

    res.status(200).json({ vendor, token });
}

const getVendorProfile = async (req, res, next) => {
    res.status(200).json(req.vendor);
}

const logoutVendor = async (req, res, next) => {
    try {
        // Extract token from cookies or authorization header safely
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        
        if (typeof blacklistTokenModel !== 'undefined' && token) {
            await blacklistTokenModel.create({ token });
        }
        
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    registerVendor,
    loginVendor,
    getVendorProfile,
    logoutVendor
};