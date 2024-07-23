const axios = require('axios');

const generateShayari = async (req, res) => {
  const { keyword } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Generate a Shayari based on the keyword: ${keyword}`,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    const shayari = response.data.choices[0].text.trim();
    res.status(200).json({ shayari });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate Shayari' });
  }
};

module.exports = {
  generateShayari
};
