import { promises as fs } from "fs"
import path from "path"

export async function GET(request: Request, response: Response) {
  const filePath = path.resolve("app/lib/vehicles.json")
  try {
    const data = await fs.readFile(filePath, "utf8")
    const vehicles = JSON.parse(data)
    return Response.json(vehicles)
  } catch (error) {
    return new Response(`Error reading JSON file: ${error}`, {
      status: 500
    })
  }
}