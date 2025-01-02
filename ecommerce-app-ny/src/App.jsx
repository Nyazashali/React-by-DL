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
      <h1 className="text-sky-500">Welcome to react class...</h1>
      <Navbar/>
      <Footer/>
    </div>
  ) //22-12 50:30:00
}

export default App
