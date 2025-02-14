import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { increment, decrement, reset } from './features/counter.slice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const counter = useSelector((state) => state.counter);
   const dispatch = useDispatch();
  return (
    <>
      <div className='m-5'>
      <h1 className='text-2xl'>Counter: <span>{counter.value}</span></h1>
      <div className='mt-2'>
        <button className='bg-blue-600 rounded px-2 text-white py-1 me-3 cursor-pointer' onClick={() => dispatch(increment())}>Increment</button>
        <button className='bg-red-600 rounded text-white px-2 py-1 me-2 cursor-pointer' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='bg-gray-600 rounded text-white px-2 py-1 me-2 cursor-pointer' onClick={() => dispatch(reset())}>Reset</button>
      </div>
      </div>
    </>
  )
}

export default App
