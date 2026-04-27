import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deletTodo, editTodo } from './config/redux-toolkit/reducers/todoslice';

function App() {
  const [input, setInput] = useState('')
  
  // selector.todo gives the slice: { todo: [...] }
  const todos = useSelector(state => state.todo.todo)  // ✅ get the array directly
  const dispatch = useDispatch();

  const addTodoToRedux = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: input }))
    setInput('') // ✅ clear input after adding
  }

  const deleteTodoFromRedux = (id) => {
    dispatch(deletTodo({ id }))  // ✅ wrap in object so action.payload.id works
  }

  const editTodoFromRedux = (oldtitle, id) => {
    const title = prompt('enter the new title', oldtitle)
    if (title) dispatch(editTodo({ id, title }))  // ✅ guard against null (user hits cancel)
  }

  return (
    <>
      <form onSubmit={addTodoToRedux}>
        <input 
          type="text" 
          placeholder='Enter The input' 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button>Add Todo</button>
      </form>

      {todos.length > 0 && todos.map(item => (  // ✅ directly map the array
        <li key={item.id}>{item.title}
          <button onClick={() => deleteTodoFromRedux(item.id)}>delete Todo</button>
          <button onClick={() => editTodoFromRedux(item.title, item.id)}>edit todo</button>
        </li>
      ))}
    </>
  )
}

export default App