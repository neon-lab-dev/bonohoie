import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { TandC } from './pages/TandC'
import { FAQ } from './pages/FAQ'
import { AboutUs } from './pages/AboutUs'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/tandc" element={<TandC/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App