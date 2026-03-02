import React, { useState } from 'react'

function App() {
  const [counter , setCounter] = useState(0)
  return (
    <>
    <h1>Counter App</h1>
    <div>
    <button onClick={()=>setCounter(counter + 1)}>+</button>
      <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter - 1)}>-</button>
    </div>
    </>
  )
}

export default App