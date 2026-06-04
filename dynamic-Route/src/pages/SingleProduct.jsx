import React, { useState } from 'react'
import { useParams } from 'react-router'
import useFetch from '../../../shared/hooks/useFetch'
import LoadingState from '../../../shared/components/LoadingState'

function SingleProduct() {
  const { id } = useParams()
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${id}`)
  const [cart, setCart] = useState(0)

  function Shop() {
    setCart(cart + 1)
    alert('Added to cart.')
  }

  return (
    <>
      <button>Cart: {cart}</button>
      <LoadingState loading={loading} error={error}>
        {data && (
          <div key={data.id}>
            <img src={data.thumbnail} alt={data.title} />
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <h5>Rating: {data.rating}</h5>
            <h3>Price: ${data.price}</h3>
            <button onClick={Shop}>Add To Cart!</button>
          </div>
        )}
      </LoadingState>
    </>
  )
}

export default SingleProduct
