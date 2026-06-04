import React from 'react'
import { Link } from 'react-router'
import SharedNavbar from '../../../shared/components/Navbar'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/services', label: 'Services' },
]

function Navbar() {
  return <SharedNavbar links={links} LinkComponent={Link} style={{ textAlign: 'center' }} />
}

export default Navbar
