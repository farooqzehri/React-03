import  {  useEffect, useState } from 'react'

function UseFetch(url) {
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)
    const [data , setData] = useState(null)

    useEffect( () => {
        fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
            return res.json()
        })
        .then(res => {
            setData(res)            
        }).catch((err) => {
            setError(err.message || 'Failed to fetch data')
        }).finally(()=> {
            setLoading(false)
        })
    }, [])
  return (
   [loading , error , data]
  )
}

export default UseFetch