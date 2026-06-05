import React from 'react'
import { Link } from 'react-router'
import SharedNavbar from '../../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/bucket', label: 'Bucket' },
]

function Navbar() {
  return (
    <nav>
      <SharedNavbar links={links} LinkComponent={Link} />
      <button>Cart</button>
    </nav>
  )
}

export default Navbar
