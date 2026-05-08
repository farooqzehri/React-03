import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Todo from './pages/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/login' element={<Login />} />
      <Route path='/todo' element={<Todo />} />

    </Routes>
  </BrowserRouter>
)
