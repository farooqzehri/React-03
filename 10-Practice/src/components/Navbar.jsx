import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to='/'> _Home</Link>
        <Link to='/users'> _Users</Link>
        <Link to='/about'> _About</Link>
        <Link to='/todos'> _Todos</Link>
        <Link to='/resourcecard'> _RCard</Link>
        <Link to='/resourceform'> _RForm</Link>

    </div>
  )
}

export default Navbar