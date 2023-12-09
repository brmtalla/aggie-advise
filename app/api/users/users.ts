// pages/api/users.js
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb'; // adjust this import to your prisma client setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.json(users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}