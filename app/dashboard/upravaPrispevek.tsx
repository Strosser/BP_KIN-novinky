'use client'

import Image from "next/image"
import { useState } from "react"
import axios from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import PotvrzeniSmazani from "./potvrzeniSmazani"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

type EditProps = {
  id: string
  avatar: string
  name: string
  title: string
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export default function UpravaPrispevek({ avatar, name, title, id }: EditProps) {
  const queryClient = useQueryClient()
  const [toggle, potvrzeni] = useState(false)
  let smazatToastID: string
  //smazat
  const { mutate } = useMutation(
    async (id: string) => await axios.delete('/api/posts/smazatPrispevek', { data: id }), {
    onSuccess: (data) => {
      toast.success("Příspěvek byl úspěšně smazán", { id: smazatToastID })
      queryClient.invalidateQueries(["auth-posts"])
    }
  }
  )
  const smazatPrispevek = () => {
    mutate(id)
  }
  return (
    <>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ ease: "easeOut" }}
        className="bg-white my-8 p-8 rounded-lg "
      >
        <div className="flex items-center gap-2">
          <Image className="rounded-full" width={32} height={32} src={avatar} alt="avatar" />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8 ">
          <p className="break-all">{title}</p>
        </div>
        <div className="flex items-center gap-4 ">
          <button
            onClick={(e) => {
              e.stopPropagation()
              potvrzeni(true)
            }}
            className="text-sm font-bold text-red-500">
            Smazat
          </button>
        </div>
      </motion.div>
      {toggle && <PotvrzeniSmazani smazatPrispevek={smazatPrispevek} potvrzeni={potvrzeni} />}
    </>
  )
}



