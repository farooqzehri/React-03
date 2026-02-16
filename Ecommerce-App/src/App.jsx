import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const App = () => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  
  useEffect( () => {
   axios('https://dummyjson.com/products')
   .then(res => {
    console.log(res.data);
    setData(res.data.products)
    
   })
   .catch(err => {
    console.log(err); })
  .finally(load => {
    setLoading(load)
  })
  } ,[])

  return (
    <>
    <div>
      <h1>Ecommerce App</h1>
      {loading && <h1>Loading...</h1>}
      {!loading && data.map((item , index) => {
        return(<div key={index}>
          <h4>{item.category}</h4>
          <img src={item.images[0]} width={200} alt={item.title} />
          <h1>{item.title}</h1>
          <h3>${item.price}</h3>
          <p>{item.description}</p>
        </div>)
      })}
    </div>
    </>
  )
}
export default App
