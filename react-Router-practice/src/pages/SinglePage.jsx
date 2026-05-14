import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePage() {
  const [ loading , setLoading] = useState(true)
  const [ error , setError] = useState(false)
  const [ data , setData]  = useState([])

  const {id} = useParams()
  useEffect(() => {
    fetch(`https://fakestoreapiserver.reactbd.org/api/products/${id}`)
    .then
  })
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