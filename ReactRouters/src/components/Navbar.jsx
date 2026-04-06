import React from 'react'
import { Link } from 'react-router'

function navbar() {
  
  return (
   <>
   <div style={{ textAlign: 'center' }}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/services'>Services</Link>

   </div>
   </>
  )
}

export default navbar