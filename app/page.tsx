import { Button } from "@/app/ui/shadcn/button"
import Sidebar from "@/app/ui/home/side-nav"
import TopNav from "@/app/ui/home/top-nav"

const App = () => (
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
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold">You have no vehicles</h3>
            <p className="text-sm text-muted-foreground">You can start selling as soon as you add a vehicle.</p>
            <Button className="mt-4">Add Product</Button>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default App

