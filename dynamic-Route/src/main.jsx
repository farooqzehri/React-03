import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import SingleProduct from './pages/SingleProduct'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Product/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/products/:id' element={<SingleProduct/>}/>

</Routes>
</BrowserRouter>

)
