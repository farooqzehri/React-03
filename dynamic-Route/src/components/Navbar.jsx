import React from 'react'
import { Link } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'

function Navbar() {
  return (
<nav>
<Link to={'/'}>Home</Link>
<Link to={'/about'}>About</Link>
<Link to={'/products'}>Produts</Link>

</nav>
  )
}

export default Navbar