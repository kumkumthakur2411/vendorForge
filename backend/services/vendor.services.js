const vendorModel = require('../models/vendor.model');

module.exports.createVendor = async (
    { companyName, email, password, contactNumber, address }) => {
    if (!companyName || !email || !password || !contactNumber)
        {
        throw new Error('Missing required fields');
    }   

    const vendor = await vendorModel.create({
        companyName,
        email,  
        password,
        contactNumber,
        address
    });
    return vendor;
};