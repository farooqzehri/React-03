import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'

function SinglePage() {
    const {id} = useParams()
    const [loading , error , data] = UseFetch(`https://dummyjson.com/products/${id}`)
  return (
    <>
    {loading && <h1>Loading...</h1>}
    {error && <h1>Abooortt!!!!!!!!!</h1>}
    {data && <img src={data.thumbnail} title={data.title}/>}
    </>
  )
}

export default SinglePage