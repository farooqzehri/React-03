import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

function Todo() {
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [todo , setTodo] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const addTodo = async (e) => {
      e.preventDefault()
      setErrorMsg('')

      const {data , error} = await supabase
      .from('todo')
      .insert([{title : title , description : description}])
      .select()

      if (error) {
        setErrorMsg(error.message || 'Failed to add todo')
      } else {
        setTodo(prev => [data[0], ...prev])
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
         setErrorMsg(error.message || 'Failed to fetch todos')
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
    {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
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