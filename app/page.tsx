'use client'
import VytvoritPost from "./components/PridatPrispevek"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Prispevek from "./components/Prispevek"
import { PostType } from "./typy/Post"
//fetch post
const fetchPrispevky = async (): Promise<PostsType[]> => {
  const response = await axios.get("/api/posts/zobrazitPrispevek")
  return response.data
}

interface User {
  name: string
  image: string
}

interface PostsType {
  title: string
  id: string
  createdAt?: string
  user: User
}

export default function Home() {
  const { data, error} = useQuery({
    queryFn: fetchPrispevky,
    queryKey: ["posts"],
  })
  if (error) return error

  return (
    <main>
      <VytvoritPost />
      {data?.map((post) => (
        <Prispevek 
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title} id={post.id} />
      ))}
    </main>
  )
}
