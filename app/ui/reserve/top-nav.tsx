import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.png"
import { Button } from "@/app/ui/shadcn/button"

export default function TopNav() {

  return (
    <header className="flex items-center h-16">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Image src={logo} width={60} height={60} alt="Logo" />
        <span>Drive Easy</span>
      </Link>
      <div className="flex-1 mx-auto max-w-md"></div>
      <Link href="/"><Button className="ml-auto" variant="outline">Go Back</Button></Link>
    </header>
  )
}