import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Users from './pages/Users.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/users" element={<Users/>}/>
</Routes>
</BrowserRouter>
)
