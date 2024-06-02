import { Button } from "@/app/ui/shadcn/button"
import Sidebar from "@/app/ui/home/side-nav"
import TopNav from "@/app/ui/home/top-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ui/shadcn/card"
import { promises as fs } from "fs"
import { Suspense } from "react"
import Image from "next/image"
import { Badge } from "@/app/ui/shadcn/badge"

export default async function HomePage({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || ""
  const file = await fs.readFile(process.cwd() + "/app/lib/vehicles.json", "utf8")
  const vehicleData: Vehicle[] = JSON.parse(file)

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row bg-muted/40 border-b">
        <div className="flex h-16 items-center px-6">
          <Sidebar />
        </div>
        <div className="flex-auto px-6">
          <TopNav />
        </div>
      </div>
      <div className="flex">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg md:text-2xl font-semibold">Browse Vehicles</h1>
          </div>
          <div
            className="flex flex-1 gap-4 flex-wrap items-center justify-center rounded-lg border border-dashed shadow-sm py-4">
            <Suspense key={query}>
              {
                vehicleData.filter(vehicle =>
                  vehicle.model.name.toLowerCase().includes(query.toLowerCase())
                ).map(vehicle => (
                  <Card key={vehicle.id} className="w-[350px] h-[500px] hover:bg-muted">
                    <CardHeader>
                      <CardTitle>{vehicle.model.name}</CardTitle>
                      <CardDescription>{vehicle.model.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image src={vehicle.thumbnail} alt={vehicle.model.name} width={300} height={200} />
                      <p>{vehicle.reservation.costPerDay}</p>
                      {vehicle.reservation.isAvailable
                        ? <Badge>Available</Badge>
                        : <Badge variant="secondary">Out of Stock</Badge>
                      }
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">More Info</Button>
                      {vehicle.reservation.isAvailable
                        ? <Button>Reserve</Button>
                        : <Button variant="secondary" disabled>Reserve</Button>
                      }
                    </CardFooter>
                  </Card>
                ))}
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
}
