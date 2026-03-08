// import React, { useState } from 'react'
// import './app.css'
// function App() {
//   const [counter , setCounter] = useState(0)
//   return (
//     <div>
//       <h1>Hello World.</h1>
//       <h3>{counter}</h3>
//       <button onClick={() => setCounter(counter + 1 )}>+</button>
//       <button onClick={() => {setCounter(counter - 1 )}}>-</button>
//       <button onClick={() => {setCounter(0)}}>reset</button>
//     </div>
//   )
// }
// export default App


//                Class second ==> hooks

import { useState  } from "react";

function Newapp(){
  const [counter , setCounter] = useState(0)
  const add = () => {
    setCounter(counter + 1)
  }
  const less = () => {
    if( counter > 0){
      setCounter(counter - 1)

    }
  }
  const reset = ()=> {
    setCounter(0)
  }


  return (
    <>
      <h1>hello</h1>

      <button onClick={add}>Add</button>
      <h2>{counter}</h2>
      <button onClick={less}>Less</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}
export default Newapp