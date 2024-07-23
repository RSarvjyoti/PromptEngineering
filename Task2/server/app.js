const express = require('express');
const cors = require('cors');
const textRoutes = require('./routes/textRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/text', textRoutes);

module.exports = app;
