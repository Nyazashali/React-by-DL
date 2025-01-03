import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Navbar/>
      <Footer/>
    </div>
  ) 
}

export default App
