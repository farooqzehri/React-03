import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePage() {
  const [ loading , setLoading] = useState(true)
  const [ error , setError] = useState(false)
  const [ data , setData]  = useState([])

  const {id} = useParams()
  useEffect(() => {
    fetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
      return res.json()
    })
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      setError(err.message || 'Failed to fetch product')
    })
    .finally(() => {
      setLoading(false)
    })
  } , [])
  return (
    <>
    {loading && <h2>Loading..</h2>}
    {error && <h2>Error..</h2>}
    {data && 
      <div key={data.title}>
        <img width={200} src={data.image} alt={data.title} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    }
    </>
  )
}

export default SinglePage