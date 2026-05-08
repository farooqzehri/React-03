import React from 'react'
import { Link } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'


function Navbar() {
  return (
<nav>
<Link to={'/'}>Home</Link>
<Link to={'/about'}>About</Link>
<Link to={'/bucket'}> Bucket</Link>

<button>Cart</button>
</nav>
  )
}

export default Navbar