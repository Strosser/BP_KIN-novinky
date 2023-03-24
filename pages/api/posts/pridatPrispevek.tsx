import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import prisma from "../../../prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(401).json({ message: "Pokud chcete přidat příspěvek musíte se přihlásit" })

// ziskani usera
const prismaUser = await prisma.user.findUnique({
    where: { email: session?.user?.email },
  })

        const title: String = req.body.title
//kontrola tittle
        if (title.length > 300) return res.status(403).json({ message: "Příspěvek je moc dlouhý" })
        if (!title.length) return res.status(403).json({ message: "Příspěvek je prázdný"})

        try {
            const vysledek = await prisma.post.create({data: {
                title, userId: prismaUser.id,
            },
        })
        console.log(vysledek)
        res.status(200).json(vysledek)
        }catch(err) {
            res.status(403).json({ err: "Error"})

        }

    }
}