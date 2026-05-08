import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deletTodo, editTodo } from './config/redux-toolkit/reducers/todoslice';

function App() {
  const [input, setInput] = useState('')


  const todos = useSelector(state => state.todo.todo) 
  const dispatch = useDispatch();

  const addTodoToRedux = (event) => {
    event.preventDefault();
    dispatch(addTodo({ title: input }))
    setInput('') 
  }

  const deleteTodoFromRedux = (id) => {
    dispatch(deletTodo({ id })) 
  }

  const editTodoFromRedux = (oldtitle, id) => {
    const title = prompt('enter the new title', oldtitle)
    if (title) dispatch(editTodo({ id, title })) 
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