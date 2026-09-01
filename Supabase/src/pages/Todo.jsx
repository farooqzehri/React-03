import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

function Todo() {
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [todo , setTodo] = useState([])

    const addTodo = async (e) => {
      e.preventDefault()
      if (!title.trim()) {
        alert('Title is required.')
        return
      }

      const {data , error} = await supabase
      .from('todo')
      .insert([{title : title.trim() , description : description.trim()}])
      .select()

      if (error) {
        alert(error.message)      
      } else {
        fetchTodo()
        
      }
      setDescription('')
      setTitle('')
    }
    const fetchTodo = async () => {
      const {data , error} = await supabase
      .from('todo')
      .select('*')
      .order('created_at' , {ascending : false})

      if (error) {
         alert(error.message)
         } else {
          setTodo(data)
          
         }
    }
    useEffect(() => {
      fetchTodo()
    }, [])
  return (
    <>
    <h5>Todo</h5>
    <form onSubmit={addTodo}>
        <input type="text" value={title} placeholder='Enter Title.' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} placeholder='Enter Description.' onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Todo</button>
    </form>
    {todo && todo.map((item , index) => {
      return <div key={index}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    })}
    </>
  )
}

export default Todo