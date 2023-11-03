import React from 'react'
import Home from './Authentication/Home'
import Loginpage from './Authentication/Loginpage' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Loginpage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App