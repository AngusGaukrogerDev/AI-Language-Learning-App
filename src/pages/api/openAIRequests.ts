import { OpenAI } from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

if (!process.env.OPENAI_API_KEY) {
  console.error('OpenAI API key is missing.');
  process.exit(1); // Exit the process if API key is not set
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Extract parameters from the request
      const { prompt } = req.query;

      // Check for missing prompt parameter
      if (!prompt || Array.isArray(prompt)) {
        return res.status(400).json({ error: 'Missing or invalid prompt parameter' });
      }

      // Construct the message content based on the received parameters
      const messageContent = `${prompt}`;

      // Make the OpenAI API request
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: messageContent }],
        model: 'gpt-3.5-turbo',
      });

      res.status(200).json({ completion: completion.choices[0] });
    } catch (error) {
      console.error('Error making OpenAI API request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
