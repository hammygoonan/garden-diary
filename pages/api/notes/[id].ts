// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import client from '@/db'
import { Post } from '@prisma/client';

type Data = {
  data: Post;
};

export default async function notes(
  req: NextApiRequest,
  res: NextApiResponse<Data | Data[]>
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401);
  } else {
    if (req.method == 'POST') {
      const post = await client.post.update({
        data: {
          body: req.body.body,
        },
        where: {
          id: req.body.id,
        }
      });
      res.status(200).json({ data: post })
    } else if (req.method == 'DELETE') {
      const post = await client.post.delete({
        where: {
          id: req.query.id?.toString(),
        }
      });
      res.status(200).json({ data: post })
    } else {
      res.status(405)
    }
  }
  res.end()
}
