'use client'
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

interface Props {
  children?: ReactNode
}

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    {children}
  </QueryClientProvider>
)

export default QueryWrapper

// zde protoze pouzivam tanstack tak musim vse v tom obalit, nez to udelat rucne tak jsem si napsal tuto funkci