import { promises as fs } from "fs"
import { Badge } from "@/app/ui/shadcn/badge"
import { Separator } from "@/app/ui/shadcn/separator"
import Counter from "@/app/ui/reserve/counter"

export default async function Reservation({ vehicleID }) {
  const file = await fs.readFile(process.cwd() + "/app/lib/vehicles.json", "utf8")
  const vehicleData: Vehicle[] = JSON.parse(file)
  const vehicle = vehicleData.find(vehicle => vehicle.id === Number(vehicleID))

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">{vehicle?.model.name}</h1>
          <p className="text-balance text-muted-foreground">
            {vehicle?.model.description}
          </p>
        </div>
        <Separator className="my-2" />
        <div className="grid gap-2 text-center">
          <p>Cost Per Day : {vehicle?.reservation.costPerDay}</p>
          {vehicle?.reservation.isAvailable
            ? <Badge className="justify-self-center">Available</Badge>
            : <Badge variant="secondary">Out of Stock</Badge>
          }
          <p>Available Amount: {vehicle?.reservation.availableCount}</p>
        </div>
        <Separator className="my-2" />
        <div className="flex-row gap-2 text-center">
          <h1 className="text-xl font-bold">Reserving Amount</h1>
          <div className="flex items-center justify-center">
            <Counter maxLimit={vehicle?.reservation.availableCount} />
          </div>
          <p className="mt-4 text-gray-500">Max Limit: {vehicle?.reservation.availableCount}</p>
        </div>
      </div>
    </div>
  )
}