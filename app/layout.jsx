import './globals.css'
import Nav from './auth/Nav'
import { Roboto } from "@next/font/google"
import Querywrapper from './auth/Querywrapper'

export const metadata = {
  title: 'KIN blog'
}

export default function RootLayout({children})
 {
  return (
    <html lang="en">
      <head>

      </head>
        <body className="mx-4 md:mx-48 xl:mx-96 font-sans bg-gray-100">
          <Querywrapper>
          <Nav />
            {children}
            </Querywrapper>   
        </body>
    </html>
  )
}
//vyrendruji nad children protoze to je kazda stranka