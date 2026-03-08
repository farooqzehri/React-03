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

import { useState } from "react";

function Newapp() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };

  const less = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-80">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Counter App
        </h1>

        <h2 className="text-5xl font-bold text-indigo-600 mb-8">
          {counter}
        </h2>

        <div className="flex justify-center gap-4">

          <button
            onClick={add}
            className="px-5 py-2 bg-green-500 text-white rounded-xl hover:scale-105 transition"
          >
            Add
          </button>

          <button
            onClick={less}
            className="px-5 py-2 bg-red-500 text-white rounded-xl hover:scale-105 transition"
          >
            Less
          </button>

          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-700 text-white rounded-xl hover:scale-105 transition"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Newapp;