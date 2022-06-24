import { useState } from "react"
import React from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    function incerment(){
        setCount(prevCount => count + 1)
    }

    function decrement(){
        setCount(prevCount => count - 1)
    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={incerment}>+</button>
    </div>
  )
}

export default Count