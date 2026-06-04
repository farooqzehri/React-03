import React, { useState } from 'react'

function About() {
  const [input , setInput] = useState('')
  const [ todos , setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos , input])
    setInput('')
  }
  return (
    <div>About

      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter Your Todo'  value={input} onChange={e => setInput(e.target.value)} />
        <input type="text" placeholder='Enter Your descriptions' value={} />

        <button>add Todo</button>
        </form>
        <div>
          {todos.map((item) => {
            return <div key={item}>{item}</div>
          })}
        </div>
    </div>
  )
}

export default About