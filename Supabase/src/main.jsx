import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Todo from './pages/Todo.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/register" element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/todo' element={<ProtectedRoute><Todo /></ProtectedRoute>} />
    </Routes>
  </BrowserRouter>
)
