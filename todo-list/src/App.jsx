import React, { useState } from 'react'

function App() {
 const [todo , setTodo] = useState([]);
  const [title , setTital] = useState('');
  const [desc , setDesc] = useState('');
  const Addtodo = (event) => {
    event.preventDefault()
    todo.push({title , desc})
   
    console.log(todo);
    console.log(title);
    console.log(desc);
    setTodo([...todo])
     setTital("")
    setDesc("")
    
  }

  const edit = (item , index)=>{
    console.log("edit todo " , todo[index]);

    const newtitle = prompt('enter updated title');
    todo[index].title = newtitle
    setTodo([...todo]);

  }
  return (
    <>
    <h1>Hello World!</h1>
    <form onSubmit={Addtodo}> 
        <input type="text" value={title} onChange={(e) => setTital(e.target.value)} placeholder='Enter the title.'/>
    <input type="text" title={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Enter the description.'/>
    <button>Submit</button>
    </form>
    

  {todo.length > 0 ? todo.map((item , index) => {
      return <div key={index}>
          <h3>Title: {item.title}</h3>
          <h5>Desc: {item.desc}</h5>

          <button>Delete</button>
          <button onClick={edit}>Edit</button>
      </div>
    } ) : <h1>No Todo Found...</h1>}
  
    </>
  )
}

export default App