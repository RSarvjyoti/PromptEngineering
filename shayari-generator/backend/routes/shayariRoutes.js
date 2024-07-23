const express = require('express');
const { generateShayari } = require('../controllers/shayariController');
const router = express.Router();

router.post('/generate', generateShayari);

module.exports = router;
