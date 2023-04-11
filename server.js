const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const publicRoute = require('./routes/api/public');
const userRoutes = require('./routes/api/users');
const bookRoutes = require('./routes/api/books');

const app = express();

// Database Connection
connectDB(process.env.URL);

// Express Middleware
app.use(express.json());

// Main Routes
app.use('/', publicRoute);
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}...`));