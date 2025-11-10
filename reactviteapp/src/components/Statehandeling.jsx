import React from 'react'
import { useState } from 'react'

function Statehandeling() {
    const [counter, setCounter] = useState(20)
    function increaseValue() {
        // alert("hiiii")
        setCounter(counter + 10)
    }
  return (
    <div>
      State handeling
      <h2>Counter value = {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <button onClick={() => {setCounter(counter - 10)}}>Decrease Value</button>
    </div>
  )
}

export default Statehandeling
