import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Curriculam from './pages/Curriculam'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'
import WhyMontessori from './pages/Blog/WhyMontessori'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/curriculum' element={<Curriculam />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/why-montessori' element={<WhyMontessori/>}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
