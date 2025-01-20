import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import DeployFaster from './components/DeployFaster';
import Footer from './components/Footer';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <DeployFaster/>
      <Footer/>
    </div>
  )
}

export default App  //22-12-2024 01-02-00
