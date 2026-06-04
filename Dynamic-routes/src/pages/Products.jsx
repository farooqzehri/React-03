import React from 'react'
import UseFetch from '../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import LoadingState from '../../../shared/components/LoadingState'

function Products() {
  const [loading, error, data] = UseFetch('https://dummyjson.com/products')
  const Navigate = useNavigate()

  return (
    <LoadingState loading={loading} error={error}>
      {data && data.products.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
          price={item.price}
          showMore={() => Navigate(`/products/${item.id}`)}
        />
      ))}
    </LoadingState>
  )
}

export default Products
