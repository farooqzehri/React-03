import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <Link to={'/'}>Home</Link>
   <Link  to={'/about'}>About</Link>
   <Link to={'/products'}>Products</Link>
   <Link to={'/singlepageproducts'}> Spage</Link>
   <Link to={'/todoadvance'}>Todo</Link>
   </>
  )
}

export default Navbar