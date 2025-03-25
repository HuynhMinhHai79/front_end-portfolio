import { prisma } from '@/app/lib/prismaClient';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { message } = req.body;
        const createMessage = await prisma.message.create({
            data: {
                content: message
            }
        })

          
        res.status(200).json(createMessage)
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', status: 500, error });
    }


   
}