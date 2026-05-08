import React from 'react'
import { Outlet } from 'react-router-dom'

function Contact() {
  return (
      <>
      <h1>Contact</h1>
      <Outlet/>
   </>
  )
}

export default Contact