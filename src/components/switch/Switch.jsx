import React from 'react'
import { useState } from 'react'

const Switch = () => {
    const [isGoingOut, setIsGoingOut] = useState(false)

    function switcheroo(){
        setIsGoingOut(prevState => !prevState)
    }

    let drip;

    
  return (
    <div onClick={switcheroo}>
        <h1>Do you feel like going out?</h1>
        <div>
            <h1>{isGoingOut ? "Yes": "No"}</h1>
        </div>
    </div>
  )
}

export default Switch