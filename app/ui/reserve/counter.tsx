"use client"

import { useState } from "react"

export default function Counter({ maxLimit }) {
  const [count, setCount] = useState(0)

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
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4"
        onClick={() => decrement()}
      >
        -
      </button>
      <span className="text-xl font-bold">{count}</span>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4"
        onClick={() => increment()}
      >
        +
      </button>
    </>
  )
}