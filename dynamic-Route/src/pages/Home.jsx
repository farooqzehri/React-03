import React from 'react'
import { useNavigate } from 'react-router'
import useFetch from '../../../shared/hooks/useFetch'
import LoadingState from '../../../shared/components/LoadingState'

function Home() {
  const [loading, error, data] = useFetch('https://dummyjson.com/products')
  const Navigate = useNavigate()

  return (
    <>
      <h1>Home</h1>
      <LoadingState loading={loading} error={error}>
        {data && data.products && data.products.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <h5>{item.category}</h5>
            <h2>${item.price}</h2>
            <button onClick={() => Navigate(`/products/${item.id}`)}>Details</button>
          </div>
        ))}
      </LoadingState>
    </>
  )
}

export default Home
