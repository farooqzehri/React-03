import React, { useState } from 'react'

function Todo() {
  const [title , setTitle] = useState('')
  const [lists , setLists] = useState([])
  const createTicket = () => {
    console.log(title);
    setLists([...lists , {
      listName: title,
      id: Date.now(),
      todo: []
    }])
    console.log(lists);
    
    
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
        </div>

      })}
    </div>
    </>
  )
}

export default Todo