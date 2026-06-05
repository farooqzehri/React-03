import { useEffect, useState } from 'react'

/**
 * Generic data-fetching hook.
 * @param {string} url - The endpoint to fetch.
 * @returns {[boolean, boolean, any]} [loading, error, data]
 */
function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!url) return

    setLoading(true)
    setError(false)
    setData(null)

    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return [loading, error, data]
}

export default useFetch
