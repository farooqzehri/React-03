import React, { useState } from 'react'

function About() {
  const [input , setInput] = useState('')
  const [ todos , setTodos] = useState([])
  const [input2 , setInput2] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos , { todo: input, description: input2 }])
    setInput('')
    setInput2('')
  }
  return (
    <div>About

      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter Your Todo'  value={input} onChange={e => setInput(e.target.value)} />
        <input type="text" placeholder='Enter Your descriptions' value={input2} onChange={e => setInput2(e.target.value)} />

        <button>add Todo</button>
        </form>
        <div>
          {todos.map((item) => {
            return <div key={item}>
              <h3>{item.}</h3>
              h4
            </div>
          })}
        </div>
    </div>
  )
}

export default About