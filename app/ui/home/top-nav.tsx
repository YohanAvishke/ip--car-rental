import Link from "next/link"
import {
  Package2,
  Search
} from "lucide-react"
import { Input } from "@/app/ui/shadcn/input"
import Image from "next/image"
import logo from "@/public/logo.png"
import { Button } from "@/app/ui/shadcn/button"

const TopNav = () => (
  <header className="flex h-16 lg:h-18 items-center border-b bg-muted/40 px-4 lg:px-6">
    <div className="flex items-center w-full">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image src={logo} width={50} height={50} alt="Logo" />
        <span>Drive Easy</span>
      </Link>
      <div className="flex-1 mx-auto max-w-md">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Cars..."
              className="w-full bg-background pl-8 shadow-none"
            />
          </div>
        </form>
      </div>
      <Button className="ml-auto">Reserve</Button>
    </div>
  </header>
)

export default TopNav
