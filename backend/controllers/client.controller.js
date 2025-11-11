const clientModel = require('../models/client.model');
const clientService = require('../services/client.services');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');
// controllers function to register a new client
const registerClient = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname, email, password, contactNumber} = req.body;
    console.log(req.body);
    const hashedPassword = await clientModel.hashPassword(password);

    const client = await clientService.createClient({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        contactNumber
    });

    const token = client.generateAuthToken();

    res.status(201).json({client, token});
}

const loginClient = async (req, res, next) => {
    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    
    const client = await clientModel.findOne({ email }).select('+password');

    if (!client) {
        return res.status(401).json({ message: 'invalid email or password' });

    }
    const isPasswordValid = await client.comparePassword(password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'invalid email or password' });
    }
    const token = client.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ client, token });
}

const getClientProfile = async (req, res, next) => {
    res.status(200).json(req.client);
}

const logoutClient = async (req, res, next) => {
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

// Controller function to get all clients   
const getAllClients = async (req, res) => {
    try {
        const clients = await clientModel.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  
// Controller function to get a client by ID
const getClientById = async (req, res) => {
    try {
        const client = await clientModel.findById(req.params.id);   
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Controller function to create a new client
const createClient = async (req, res) => {
    try {       
        const newClient = new clientModel(req.body);
        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};  
// Controller function to update a client by ID
const updateClient = async (req, res) => {
    try {
        const updatedClient = await clientModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );  
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(updatedClient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Controller function to delete a client by ID
const deleteClient = async (req, res) => {
    try {   
        const deletedClient = await clientModel.findByIdAndDelete(req.params.id);
        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = {
    registerClient,
    getAllClients,
    getClientById,
    createClient,
    loginClient,    
    updateClient,
    deleteClient,
    getClientProfile,
    logoutClient
};