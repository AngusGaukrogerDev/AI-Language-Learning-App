import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, wordLevel } = req.body;

    try {
      // Update the card level in the database
      const updatedCard = await prisma.userWordProgress.update({
        where: { id: id },
        data: { wordLevel: wordLevel },
      });

      res.status(200).json(updatedCard);
    } catch (error) {
      res.status(500).json({ error: 'Database update failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
