import React, { useEffect, useState} from "react";
const [products, setProducts] = useState(null)
const [loading , setLoading] = useState(true)
function App(){
  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then(res => res.json())
    .then(res => {
      console.log(res)
    }).catch(err => console.error(err)).finally(() => {
      console.log('Fetch attempt finished');
    })
  })
}
export default App;