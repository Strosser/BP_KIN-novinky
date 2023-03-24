import Link from "next/link"
import Prihlaseni from "./Prihlaseni"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import Prihlaseny from "./Prihlaseny"

export default async function Nav(){
  const session = await getServerSession(authOptions)
  return(
   <nav className="flex justify-between items-center py-8">
    <Link href={"/"}>
    <h1 className="text-2xl font-poppins">KIN novinky</h1>
    </Link>
    <ul className="flex items-center gap-6">
      {!session?.user && <Prihlaseni />}
      {session?.user && <Prihlaseny image={session.user?.image || ""} />}
    </ul>
   </nav> 
  )
}

// idea je treba protoze nemuzu zde mit button kvuli tomu ze bz mi to vyhodilo error, proto6e button muze byt pouye na client componente a tohle je server komponenta. Takze bude clinet uvnitr 