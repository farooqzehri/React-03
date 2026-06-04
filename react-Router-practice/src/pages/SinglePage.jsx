import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../shared/hooks/useFetch'
import LoadingState from '../../../shared/components/LoadingState'

function SinglePage() {
  const { id } = useParams()
  const [loading, error, data] = useFetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)

  return (
    <>
      <LoadingState loading={loading} error={error}>
        {data && data.data && (
          <div key={data.data.title}>
            <img width={200} src={data.data.image} alt={data.data.title} />
            <h1>{data.data.title}</h1>
            <p>{data.data.description}</p>
          </div>
        )}
      </LoadingState>
    </>
  )
}

export default SinglePage
