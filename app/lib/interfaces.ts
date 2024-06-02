interface Vehicle {
  id: number,
  url: string,
  thumbnail: string,
  image: string,
  model: {
    name: string,
    description: string,
    manufacturedYear: string,
    colour: string,
    type: string,
    gearBox: string,
    engineModel: string,
    mileage: string,
  },
  reservation: {
    costPerDay: string,
    stockCount: number,
    availableCount: number,
    isAvailable: boolean,
    temporaryReservationCount: number,
  },
  brand: {
    name: string,
    image: string,
    carCount: number,
  },
}