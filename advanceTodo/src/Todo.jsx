import React, { useState } from 'react'

function Todo() {
  const [title , setTitle] = useState('')
  const [lists , setLists] = useState([])
  const [innerInput , setInnerInput] = useState('')
  const [innerTodo , setInnerTodo] = useState([])
  const createTicket = () => {
    console.log(title);
    setLists([...lists , {
      listName: title,
      id: Date.now(),
      todo: []
    }])
    console.log(lists);
    
    
  }
  const innerInputBtn = (e) => {
    console.log(innerInput);
    e.preventDefault()
    innerTodo.push({innerInput})
    
    

  }
  return (
    <>
    <h1>Hello </h1>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your task' />
    <button onClick={createTicket}>Create ticket</button>

    <div>
      {lists.length > 0 && lists.map((item) => {
        return <div key={item.id}>
          <h3>{item.listName}</h3>
          <input type="text" placeholder='Enter your todo ' value={innerInput}  onChange={(e) => setInnerInput(e.target.value)}/>
          <button onClick={innerInputBtn}>Add Todo</button>
        </div>

      })}
    </div>
    </>
  )
}

export default Todo