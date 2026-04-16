import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Products from './pages/Products.jsx'
import SinglePage from './pages/SinglePage.jsx'
import TodoPro from './pages/TodoPro.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<SinglePage/>}/>
      <Route path='/todoadvance' element={<TodoPro/>}/>
    
    </Routes>
  </BrowserRouter>

)
