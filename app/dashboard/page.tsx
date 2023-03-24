import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"
import MojePrispevky from "./mojePrispevky"

export default async function Profil(){
    const session = await getServerSession(authOptions)
    if(!session){
        redirect('/api/auth/signin')
    }
    return(
        <main>
            <MojePrispevky/>
        </main>
    )
}