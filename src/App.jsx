import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Product' element={<Product/>}/>
         <Route path='/Contact' element={<Contact/>}/>
       </Routes>
    </div>
  )
}

export default App
