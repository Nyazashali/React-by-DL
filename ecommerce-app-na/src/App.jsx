import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <Orders/>
      {/* <Home/>
      <Products/>*/}
        
      <Footer/>
    </div>
  )
}

export default App  //22-12-2024 01-02-00
