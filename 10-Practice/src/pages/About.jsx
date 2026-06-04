import React, { useState } from 'react'

function About() {
  const [input , setInput] = useState('')
  const [ todos , setTodos] = useState([])
  return (
    <div>About

      <form>
        <input type="text" placeholder='enter Your Email'  />
        <button>add Todo</button>
        
      </form>
    </div>
  )
}

export default About