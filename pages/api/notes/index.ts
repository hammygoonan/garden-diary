// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import client from '@/db'

type Data = {
  id: string,
  body: string
}

type SessionData = {
  user: {
    name: string | null,
    email: string,
    image: string | null,
    id: string,
  },
  expires: Date,
};

export default async function notes(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const session = await unstable_getServerSession(req, res, authOptions) as SessionData

  if (req.method !== 'POST') {
    res.status(405)
  } else {
    if (session) {
      const post = await client.post.create({
        data: {
          userId: session.user.id,
          body: req.body.body,
        }
      });
      res.status(200).json({ id: post.id, body: post.body, })
    } else {
      // Not Signed in
      res.status(401)
    }
  }
  res.end()
}
