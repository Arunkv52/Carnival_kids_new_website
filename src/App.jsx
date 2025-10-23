import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Curriculam from './pages/Curriculam'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/curriculam' element={<Curriculam />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
