import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router'

function Home() {
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data , setData] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            console.log(res.products);
            setData(res.products)
            
        }).catch(() => {
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    const Navigate = useNavigate()
  return (
    <>
    <h1>Home</h1>
    <Navbar/>
    {loading && <h1>Loading...</h1>}
    {error && <h1>Abooorttt!!</h1>}
    {data && data.map((item) => {
        return <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <h5>{item.category}</h5>
            <h2>${item.price}</h2>
            <button onClick={() => Navigate(`/product/${item.id}`)}>Details</button>
        </div>
    })}
    </>
)
}

export default Home