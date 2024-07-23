const axios = require('axios');

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const generateText = async (prompt) => {
  try {
    const response = await openaiApi.post('/engines/davinci-codex/completions', {
      prompt,
      max_tokens: 150,
    });
    return response.data.choices[0].text;
  } catch (error) {
    throw error;
  }
};

const summarizeText = async (text) => {
  // Implementation for summarization
};

const translateText = async (text, targetLanguage) => {
  // Implementation for translation
};

module.exports = {
  generateText,
  summarizeText,
  translateText,
};
