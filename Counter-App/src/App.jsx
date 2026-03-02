import React, { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Counter App</h1>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(0)}>reset</button>
      </div>
    </>
  )
}

export default App