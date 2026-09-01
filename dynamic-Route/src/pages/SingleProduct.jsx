import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function SingleProduct() {
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(false);
  const [data , setData] = useState(null);

  const {id} = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
      return res.json()
    })
    .then(res => {
      setData(res)
    }).catch((err) => {
      setError(err.message || 'Failed to fetch product')
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  const [cart , setCart] = useState(0)
  function Shop(){
    setCart( cart + 1)
    if(data.id === data.id){
      alert('Added to cart.')
    }
  }
  
  return (

   <>
  <button>Cart: {cart}`</button>
   {loading && <h2>Loading...</h2>}
   {error && <h2>Abort!...</h2>}
   {data && <div key={data.id}>
    <img src={data.thumbnail} alt={data.title}/>
    <h2>{data.title}</h2>
    <h4>{data.description}</h4>
    <h5>Rating: {data.rating}</h5>
    <h3>Price:  ${data.price}</h3>
    <button onClick={Shop}>Add To Cart!</button>

    </div>}
   </>
  )
}

export default SingleProduct