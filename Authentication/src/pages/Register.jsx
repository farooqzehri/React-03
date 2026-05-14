import React from 'react'

function Register() {
  return (
    <>
    <form>
        <input type="text"  placeholder='Username'/>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button type="submit">Register</button>
    </form>
    </>
  )
}

export default Register