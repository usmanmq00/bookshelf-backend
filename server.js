const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes/api/users');

const app = express();

// Database Connection
connectDB(process.env.URL);

// Express Middleware
app.use(express.json());

// Main Routes
app.use('/api/users', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}...`));