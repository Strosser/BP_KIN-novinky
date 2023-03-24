'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPrispevek } from "../typy/AuthPrispevek"
import UpravaPrispevek from "./upravaPrispevek"

const fetchAuthPosts = async () => {
    const response = await axios.get("/api/posts/authPrispevek")
    return response.data
}


export default function MojePrispevky() {
    const { data } = useQuery<AuthPrispevek>({ queryFn: fetchAuthPosts, queryKey: ["auth-posts"] })
    if (data) console.log(data)
    return (
        <div>
            {data?.Post?.map((post) => (<UpravaPrispevek id={post.id} key={post.id} avatar={data.image} name={data.name} title={post.title} />))}
        </div>
    )
}