"use client"

import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/app/ui/shadcn/input"
import Image from "next/image"
import logo from "@/public/logo.png"
import { Button } from "@/app/ui/shadcn/button"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function TopNav() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <header className="flex items-center h-16">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image src={logo} width={60} height={60} alt="Logo" />
        <span>Drive Easy</span>
      </Link>
      <div className="flex-1 mx-auto max-w-md">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Vehicles..."
              className="w-full bg-background pl-8 shadow-none"
              onChange={(e) => {
                handleSearch(e.target.value)
              }}
              defaultValue={searchParams.get("query")?.toString()}
            />
          </div>
        </form>
      </div>
      <Button className="ml-auto">Reserve</Button>
    </header>
  )
}