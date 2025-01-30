import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import Footer from './components/Footer';
import Orders from './views/Orders';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/orders" element={<Orders/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    
      <Footer/>
    </div>
  )
}

export default App  //22-12-2024 01-02-00
