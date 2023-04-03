const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./conn/db');

const app = express();

connectDB(process.env.URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}...`));