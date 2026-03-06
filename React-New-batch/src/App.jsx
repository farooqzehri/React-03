import React, { useState } from 'react'

function App() {
  const [counter , setCounter] = useState(0)
  return (
    <div>
      <h1>Hello World.</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1 )}>+</button>
      <button onClick={() => {setCounter(counter - 1 )}}>-</button>
      <button onClick={() => {setCounter(0)}}>reset</button>
    </div>
  )
}
export default App