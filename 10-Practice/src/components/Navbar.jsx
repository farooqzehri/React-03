import React from 'react'
import { Link } from 'react-router-dom'
import SharedNavbar from '../../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/about', label: 'About' },
]

function Navbar() {
  return <SharedNavbar links={links} LinkComponent={Link} />
}

export default Navbar
