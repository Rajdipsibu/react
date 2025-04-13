import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color,setColor] = useState("white")
  function handleColorChange(event){
    const selected_color = event.target.id;
    // console.log(selected_color);
    
    setColor(selected_color)
  }
//for changing the body bg color we use useEffect.
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return(
    <div
    className='flex flex-col items-center justify-center min-h-screen gap-6'
    >
      <h1 className='text-3xl font-bold'>Color Changer App</h1>
      <div className='flex flex-wrap gap-4'>
        <button
        id='green'
        onClick={handleColorChange}
        className='bg-green-600 text-white px-4 py-2 rounded-2xl'
        >Green</button>
        <button
        id='blue'
        onClick={handleColorChange}
        className='bg-blue-600 text-white px-4 py-2 rounded-2xl'
        >Blue</button>
        <button
        id='red'
        onClick={handleColorChange}
        className='bg-red-600 text-white px-4 py-2 rounded-2xl'
        >Red</button>
      </div>
      <p
      className="mt-4 text-lg font-medium">
        Current color:<span className='font-mono'> {color}</span>
      </p>
    </div>
  );
}

export default App
