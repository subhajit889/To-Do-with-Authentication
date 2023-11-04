import React from 'react'
import "./app.css"
import Home from './Authentication/Home'
import Loginpage from './Authentication/Loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import TodoPage from './Components/ToDo/TodoPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/Todo' element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App