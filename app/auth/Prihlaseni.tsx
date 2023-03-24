'use client'

import { signIn } from "next-auth/react"

export default function Prihlaseni(){
  return (
        <li className="list-none">
          <button onClick={() => signIn()} className="text-lg bg-orange-400 shadow-lg hover:bg-orange-500 text-white py-2 px-6 rounded-xl">Přihlásit se</button>
        </li>
      )
}