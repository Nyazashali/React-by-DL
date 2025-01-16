import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
 
  return (
    <div>
      <h1 className='text-sky-500 text-2xl font-bold m-4'>Welcome to react js</h1>

      <Navbar/>
      <Footer/>

    </div>
  )
}

export default App  //22-12-2024 
