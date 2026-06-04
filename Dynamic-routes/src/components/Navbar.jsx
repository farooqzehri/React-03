import React from 'react'
import { Link } from 'react-router-dom'
import SharedNavbar from '../../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/singlepageproducts', label: 'Spage' },
  { to: '/todoadvance', label: 'Todo' },
]

function Navbar() {
  return <SharedNavbar links={links} LinkComponent={Link} />
}

export default Navbar
