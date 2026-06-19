import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Users from './pages/Users.jsx'
import Navbar from './components/Navbar.jsx'
import SingleUser from './pages/SingleUser.jsx'
import Todos from './pages/Todos.jsx'
import ResourceForm from './pages/ResourceForm.jsx'
import ResourceCard from './pages/ResourceCard.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route index element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path='/singleuser/:id' element={<SingleUser/>}/>
  <Route path='/todos' element={<Todos/>}/>
  <Route path='/resourceform' element={<ResourceForm/>}/>
  <Route path='/resourcecard' element={<ResourceCard/>}/>
</Routes>
</BrowserRouter>
)
