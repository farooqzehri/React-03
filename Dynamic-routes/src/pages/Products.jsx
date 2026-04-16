import React from 'react'
import UseFetch from '../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

function Products() {
    const [loading , error , data] = UseFetch('https://dummyjson.com/products')
    const Navigate = useNavigate()
  return (
    <>
    {loading && <h1>Loading ho raha hai</h1>}
    {error && <h1>Error Agaya !!</h1>}
   {data && data.products.map( (item , index) => {
    return <Card key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price}  showMore={()=> Navigate(`/product/${item.id}`)}/>
   })}
    </>
  )
}

export default Products