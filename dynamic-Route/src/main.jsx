import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import SingleProduct from './pages/SingleProduct'
import Bucket from './components/Bucket'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/products/:id' element={<SingleProduct/>}/>
  <Route path={'/bucket'} element={<Bucket/>}/>

</Routes>
</BrowserRouter>

)
