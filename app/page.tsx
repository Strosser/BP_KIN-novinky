'use client'
import VytvoritPost from "./components/PridatPrispevek"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Prispevek from "./components/Prispevek"
import { PostType } from "./typy/Post"
//fetch post
const vsechnyPrispevky = async () => {
  const response = await axios.get("/api/posts/zobrazitPrispevek")
  return response.data
}

export default function Home() {
  const { data, error} = useQuery<PostType[]>({
    queryFn: vsechnyPrispevky,
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
          postTitle={post.title} id={undefined} />
      ))}
    </main>
  )
}
