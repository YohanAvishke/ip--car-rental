"use client"

import { useState } from "react"
import { Button } from "@/app/ui/shadcn/button"
import { Minus, Plus } from "lucide-react"

export default function Counter({ maxLimit }) {
  const [count, setCount] = useState(1)

  const increment = () => {
    if (count < maxLimit) {
      setCount(count + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={() => decrement()}>
        <Minus />
      </Button>
      <span className="text-xl font-bold">{count}</span>
      <Button onClick={() => increment()}>
        <Plus />
      </Button>
    </>
  )
}