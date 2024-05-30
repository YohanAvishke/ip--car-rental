import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/app/ui/shadcn/input"
import Image from "next/image"
import logo from "@/public/logo.png"
import { Button } from "@/app/ui/shadcn/button"

const TopNav = () => (
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
            placeholder="Search Cars..."
            className="w-full bg-background pl-8 shadow-none"
          />
        </div>
      </form>
    </div>
    <Button className="ml-auto">Reserve</Button>
  </header>
)

export default TopNav
