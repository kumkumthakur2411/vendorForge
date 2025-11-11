const clientModel = require('../models/client.model');

//controllers function to rgister a new client
module.exports.createClient = async (
    { firstname, lastname, email, password, contactNumber }
) => {
    if (!firstname || !email || !password || !contactNumber) {
        throw new Error('Missing required fields');
    }
    const client = clientModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        contactNumber
    });
    return client;
};