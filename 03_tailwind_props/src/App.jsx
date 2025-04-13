import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl text-black mb-4'>tailwind Test</h1>
    <Card name="Rajdip Das"/>
    </>
  )
}

export default App
