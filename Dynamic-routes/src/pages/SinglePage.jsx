import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import LoadingState from '../../../shared/components/LoadingState'

function SinglePage() {
  const { id } = useParams()
  const [loading, error, data] = UseFetch(`https://dummyjson.com/products/${id}`)

  return (
    <LoadingState loading={loading} error={error}>
      {data && <img src={data.thumbnail} title={data.title} />}
    </LoadingState>
  )
}

export default SinglePage
