import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ui/shadcn/card"
import { Button } from "@/app/ui/shadcn/button"
import { Copy, Truck } from "lucide-react"
import { Separator } from "@/app/ui/shadcn/separator"
import { promises as fs } from "fs"

export default async function OrderSummary({ vehicleID }) {
  const file = await fs.readFile(process.cwd() + "/app/lib/vehicles.json", "utf8")
  const vehicleData: Vehicle[] = JSON.parse(file)
  const vehicle = vehicleData.find(vehicle => vehicle.id === Number(vehicleID))

  const getFormattedDate = () => {
    const date = new Date()
    const options = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <Card
      className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
    >
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Order Oe31b70H
          </CardTitle>
          <CardDescription>Date: {getFormattedDate()}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <Truck className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {vehicle?.model.name} x <span>2</span>
                      </span>
              <span>AU$ {Number(vehicle?.reservation.costPerDay.substring(3).replace(/,/g, "")) * 2}</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>AU$ {Number(vehicle?.reservation.costPerDay.substring(3).replace(/,/g, "")) * 2}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>AU$ 25.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>AU$ {Number(vehicle?.reservation.costPerDay.substring(3).replace(/,/g, "")) * 2 + 25}</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Shipping Information</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>Liam Johnson</span>
              <span>1234 Main St.</span>
              <span>Anytown, CA 12345</span>
            </address>
          </div>
          <div className="grid auto-rows-max gap-3">
            <div className="font-semibold">Billing Information</div>
            <div className="text-muted-foreground">
              Same as shipping address
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Customer Information</div>
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Customer</dt>
              <dd>Liam Johnson</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd>
                <a href="mailto:">liam@acme.com</a>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <a href="tel:">+1 234 567 890</a>
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
          Updated <time dateTime="2023-11-23">{getFormattedDate()}</time>
        </div>
      </CardFooter>
    </Card>
  )
}