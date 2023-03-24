import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse){

  

  if (req.method === "DELETE") 
  {const session = await getServerSession(req, res, authOptions)
    if (!session) return res.status(401).json({ message: "Prosím, přihlašte se." })

    try {
      const postID = req.body
      const vysledek = await prisma.post.delete({where:{id: postID}})
      res.status(200).json(vysledek)
    } catch (err) {
      res.status(403).json({ err: "Error" })
    }
  }
}