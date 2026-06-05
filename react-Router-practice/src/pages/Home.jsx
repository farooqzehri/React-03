import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../shared/hooks/useFetch'
import LoadingState from '../../../shared/components/LoadingState'

function Home() {
  const [loading, error, data] = useFetch('https://fakestoreapiserver.reactbd.org/api/products')
  const navigate = useNavigate()

  return (
    <>
      <h1>Home.</h1>
      <LoadingState loading={loading} error={error}>
        {data && data.data && data.data.map(item => (
          <div key={item.title}>
            <img width={200} src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={() => navigate(`/products/${item._id}`)}>details</button>
          </div>
        ))}
      </LoadingState>
    </>
  )
}

export default Home
