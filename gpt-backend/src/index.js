const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const openaiApiKey = process.env.OPENAI_API_KEY;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/chat', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
            }
        });

        const gptResponse = response.data.choices[0].text.trim();
        res.json({ response: gptResponse });
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        res.status(500).json({ error: 'Error communicating with OpenAI API' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
