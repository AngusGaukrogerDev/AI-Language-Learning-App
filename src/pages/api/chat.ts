// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { OpenAI } from 'openai';

type Data = {
  reply?: string;
  message?: string;
  error?: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { prompt } = req.query;

  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ message: 'Prompt is required' });
  }

  try {
    // Construct the message content based on the received parameters
    const messageContent = `${prompt}`;

    // Make the OpenAI API request
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: messageContent }],
      model: 'gpt-3.5-turbo',
    });

    const reply = completion.data.choices[0].message?.content;

    res.status(200).json({ reply });
    // const response = await axios.post(
    //   'https://api.openai.com/v1/engines/davinci-codex/completions',
    //   {
    //     prompt: prompt,
    //     max_tokens: 150,
    //     temperature: 0.9,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     }
    //   }
    // );

    // res.status(200).json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred';
    
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.error || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({ message: 'Error communicating with AI service', error: errorMessage });
  }
}
