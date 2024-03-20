import { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { topic } = req.query;
      
      const prompt = ChatPromptTemplate.fromMessages([
        ['human', `Tell me 4 new spanish words about ${topic} and parse them as json so they can be created into flashcards`],
      ]);
      const model = new ChatOpenAI({});
      const outputParser = new StringOutputParser();
      
      const chain = prompt.pipe(model).pipe(outputParser);
      
      const response = await chain.invoke({ topic });
      
      res.status(200).json({ joke: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
