import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { data, useNavigate, useParams } from 'react-router-dom'

function Home() {
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapiserver.reactbd.org/api/products')
    .then(res => res.json())
    .then(res => {
        setData(res.data)
    }).catch(err => {
        setError(err)
    }).finally(() => {
        setLoading(false)
    })
  }, [])
  const navigate = useNavigate()

    return (
    <>
    <h1>Home.</h1>
    {error && <h1>Abort...!!</h1>}
    {loading && <h1>LOading...</h1>}
    {data.length > 0 && data.map(item => {
        return <div key={item.title}>
        <img width={200} src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <button onClick={()=> navigate(`/products/${item._id}`)}>details</button>
        </div>
    })}
    
    </>
  )
}

export default Home