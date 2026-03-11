import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, { title, desc }]);
    setTitle("");
    setDesc("");
  }

  const edit = (item, index) => {
    const newTitle = prompt("Enter updated title:", todo[index].title);
    if (newTitle === null) return; // user cancelled
    const updatedTodo = [...todo];
    updatedTodo[index] = { ...updatedTodo[index], title: newTitle };
    setTodo(updatedTodo);
  };

  const deleteTodo = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter the title.'
        />
        <input
          type="text"
          value={desc}               
          onChange={(e) => setDesc(e.target.value)}
          placeholder='Enter the description.'
        />
        <button>Submit</button>
      </form>

      {todo.length > 0 ? todo.map((item, index) => {
        return (
          <div key={index}>
            <h3>Title: {item.title}</h3>
            <h5>Desc: {item.desc}</h5>
            <button onClick={() => deleteTodo(index)}>Delete</button>   {/* ✅ Fixed */}
            <button onClick={() => edit(item, index)}>Edit</button>     {/* ✅ Fixed */}
          </div>
        )
      }) : <h1>No Todo Found...</h1>}
    </>
  )
}

export default App