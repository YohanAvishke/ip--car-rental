import Link from "next/link"
import {
  HomeIcon,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  Menu
} from "lucide-react"
import { Badge } from "@/app/ui/shadcn/badge"
import { Button } from "@/app/ui/shadcn/button"
import {
  Sheet,
  SheetContent, SheetDescription, SheetHeader, SheetTitle,
  SheetTrigger
} from "@/app/ui/shadcn/sheet"

const Sidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      {/*Open button*/}
      <Button variant="outline" size="icon">
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Drive Easy</SheetTitle>
        <SheetDescription>
          Filter by car models
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col pt-10">
        <Link href="#" className="flex items-center gap-4 py-2.5 hover:bg-muted">
          <HomeIcon className="h-5 w-5" />
          Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-4 py-2.5 hover:bg-muted">
          <ShoppingCart className="h-5 w-5" />
          Orders
          <Badge className="ml-auto flex h-6 w-6 items-center justify-center rounded-full">6</Badge>
        </Link>
        <Link href="#" className="flex items-center gap-4 py-2.5 hover:bg-muted">
          <Package className="h-5 w-5" />
          Products
        </Link>
        <Link href="#" className="flex items-center gap-4 py-2.5 hover:bg-muted">
          <Users className="h-5 w-5" />
          Customers
        </Link>
        <Link href="#" className="flex items-center gap-4 py-2.5 hover:bg-muted">
          <LineChart className="h-5 w-5" />
          Analytics
        </Link>
      </div>
    </SheetContent>
  </Sheet>
)

export default Sidebar
