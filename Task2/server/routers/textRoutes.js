const express = require('express');
const {
  generateTextController,
  summarizeTextController,
  translateTextController,
} = require('../controllers/textController');

const router = express.Router();

router.post('/generate', generateTextController);
router.post('/summarize', summarizeTextController);
router.post('/translate', translateTextController);

module.exports = router;
