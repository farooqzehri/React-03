import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Services from '../Services'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
    </Routes>
    </>
  )
}

export default Router