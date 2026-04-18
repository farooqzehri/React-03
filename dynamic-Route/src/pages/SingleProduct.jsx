import React, { useEffect, useState } from 'react'

function SingleProduct() {
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(false);
  const [data , setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
  })
      const {id} = useParams();
  
  return (
   <>
   
   </>
  )
}

export default SingleProduct