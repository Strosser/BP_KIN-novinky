'use client'
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"

export default function VytvoritPost() {
    const [title, setTitle] = useState('')
    const [isDisabled, setIsDisdabled] = useState(false)
    const queryClient = useQueryClient()

    const { mutate } = useMutation(
        async (title: string) =>
            await axios.post("/api/posts/pridatPrispevek", {
                title,
            }),
        {
            onError: (error) => {
                if (error instanceof AxiosError) {
                    toast.error(error?.response?.data.message)
                } setIsDisdabled(false)
            },
            onSuccess: (data) => { queryClient.invalidateQueries(["posts"]), toast.success('Příspěvek byl přidán'), setTitle(""), setIsDisdabled(false) },
        })

    const potvrditPrispevek = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisdabled(true)
        mutate(title)
    }

    return (
        <form onSubmit={potvrditPrispevek} className="my-8 rounded-md">
            <div className="flex flex-col gap-2 my-8rounded-lg">
                <textarea onChange={(e) => setTitle(e.target.value)} name="tittle" value={title}
                    placeholder="Co chcete přidat?" className="p-4 text-gl rounded-md my-2 bg-white border-b-2 border-orange-400"></textarea>

                <div className="flex items-center justify-between">
                    <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-700"
                        } `}>{`${title.length}/300`}</p>
                    <button disabled={isDisabled} className="text-lg bg-orange-400 shadow-lg hover:bg-orange-500 text-white py-2 px-12 rounded-xl disabled:opacity-25" type="submit">Přidat</button>
                </div>
            </div>

        </form>
    )
}