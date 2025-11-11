const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser');
const connectToDB = require('./db/db');
const clientRoutes = require('./routes/client.routes');
const vendorRoutes = require('./routes/vendor.routes');

connectToDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/clients', clientRoutes);
app.use('/vendors', vendorRoutes);

module.exports = app;

