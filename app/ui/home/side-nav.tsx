"use client"

import {
  Menu
} from "lucide-react"
import { Badge } from "@/app/ui/shadcn/badge"
import { Button } from "@/app/ui/shadcn/button"
import {
  Sheet,
  SheetContent, SheetDescription, SheetHeader, SheetTitle,
  SheetTrigger
} from "@/app/ui/shadcn/sheet"
import Image from "next/image"
import brands from "@/app/lib/brands.json"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function SideNav() {
  const [open, setOpen] = useState(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleBrandClick(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Drive Easy</SheetTitle>
          <SheetDescription>
            Filter by Vehicle Brands
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col pt-10">
          {brands.map(brand => (
            <div
              key={brand.id}
              className="flex items-center gap-4 py-2.5 hover:bg-muted"
              onClick={() => {
                setOpen(false)
                handleBrandClick(brand.name)
              }}
            >
              <Image src={brand.image} alt={brand.name} width={50} height={50} />
              <p>{brand.name}</p>
              <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full">{brand.carCount}</Badge>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}