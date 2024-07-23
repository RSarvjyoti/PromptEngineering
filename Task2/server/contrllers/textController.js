const { generateText, summarizeText, translateText } = require('../services/openaiService');

const generateTextController = async (req, res) => {
  const { prompt } = req.body;
  try {
    const generatedText = await generateText(prompt);
    res.json({ generatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const summarizeTextController = async (req, res) => {
  const { text } = req.body;
  try {
    const summary = await summarizeText(text);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const translateTextController = async (req, res) => {
  const { text, targetLanguage } = req.body;
  try {
    const translation = await translateText(text, targetLanguage);
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  generateTextController,
  summarizeTextController,
  translateTextController,
};
