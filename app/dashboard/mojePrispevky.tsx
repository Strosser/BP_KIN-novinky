'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPrispevek } from "../typy/AuthPrispevek"
import UpravaPrispevek from "./upravaPrispevek"

const fetchAuthPosts = async () => {
    const response = await axios.get("/api/posts/authPrispevek")
    return response.data
}


interface UserProp {
    email: string
    id: string
    image: string
    name: string
    posts?: Posts[]
  }
  interface Posts {
    createdAt: string
    id: string
    title: string
  }


export default function MojePrispevky(): JSX.Element {
    const getAuthPosts = async (): Promise<UserProp> => {
      const data = await fetch("/api/posts/authPosts")
      const res = await data.json()
      return res
    }
    const { data } = useQuery<AuthPrispevek>({ queryFn: fetchAuthPosts, queryKey: ["auth-posts"] })
    if (data) console.log(data)
    return (
        <div>
            {data?.Post?.map((post) => (<UpravaPrispevek id={post.id} key={post.id} avatar={data.image} name={data.name} title={post.title} />))}
        </div>
    )
}