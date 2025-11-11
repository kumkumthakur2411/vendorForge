const clientModel = require('../models/client.model');
const vendorModel = require('../models/vendor.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const authClient = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }    
    let isblacklistedToken = null;
    if (typeof blacklistTokenModel !== 'undefined') {
        isblacklistedToken = await blacklistTokenModel.findOne({ token });
    }
    if (isblacklistedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // token in model is signed with {_id: this._id} so read _id here
    const client = await clientModel.findById(decoded._id);
          
        req.client = client;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   
};

const authVendor = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }    
    let isblacklistedToken = null;
    if (typeof blacklistTokenModel !== 'undefined') {
        isblacklistedToken = await blacklistTokenModel.findOne({ token });
    }
    if (isblacklistedToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // token in model is signed with {_id: this._id} so read _id here
    const vendor = await vendorModel.findById(decoded._id);
          
        req.vendor = vendor;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   
};
module.exports={ authClient,authVendor};