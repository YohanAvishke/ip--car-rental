import OrderSummary from "@/app/ui/reserve/order-summary"
import Reservation from "@/app/ui/reserve/reservation"
import TopNav from "@/app/ui/reserve/top-nav"

export default function ReservePage({ searchParams }) {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row bg-muted/40 border-b">
          <div className="flex-auto px-6">
            <TopNav />
          </div>
        </div>
      </div>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] lg:gap-6 lg:p-6">
        <Reservation vehicleID={searchParams.id} />
        <div>
          <OrderSummary vehicleID={searchParams.id} />
        </div>
      </div>
    </>
  )
}
