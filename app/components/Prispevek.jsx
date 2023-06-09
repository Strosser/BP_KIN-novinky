'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Post } from "@prisma/client"

export default function Prispevek({ avatar, name, postTitle, id }) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut" }}
      className="bg-white shadow-lg my-8 p-8 rounded-lg"
    >
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            width={32}
            height={32}
            src={avatar}
            alt="avatar"
          />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
          <p className="break-all">{postTitle}</p>
        </div>
        <div className="flex gap-4 cursor-pointer items-center">
          <Link
            href={{
              pathname: `/post/${id}`,
            }}
          >
          </Link>
        </div>
      </div>
    </motion.div>
  )
}