import React, { useState } from 'react'

function App() {
 const [todo , setTodo] = useState([]);
  const [title , setTital] = useState('');
  const [desc , setDesc] = useState('');
  const Addtodo = (event) => {
    event.preventDefault()
    todo.push({title , desc})
    
  }
  return (
    <>
    <h1>Hello World!</h1>
    <form > 
        <input type="text" value={title} placeholder='Enter the title.'/>
    <input type="text" title={desc} placeholder='Enter the description.'/>
    <button>Submit</button>
    </form>
  
    </>
  )
}

export default App