import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import SinglePage from './pages/SinglePage'
import Products from './pages/Products'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route  path='/contact' element={<Contact/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/products/:id' element={<SinglePage/>} />

</Routes>
</BrowserRouter>
)
