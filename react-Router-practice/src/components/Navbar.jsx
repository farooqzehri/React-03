import React from 'react'
import { Link } from 'react-router-dom'
import SharedNavbar from '../../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return <SharedNavbar links={links} LinkComponent={Link} />
}

export default Navbar
