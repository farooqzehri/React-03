import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<div>
  <h1>Counter App.</h1>
  <h2>{count}</h2>

  <button onClick={setCount(count + 1)}>+</button>
  <button onClick={setCount(count - 1)}>-</button>
  <button>reset</button>
</div>
</>
  )
}

export default App
