import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {
  let [counter,setCounter] = useState(0)//its the hooks 
  // let counter = 10
  function addvalue(){
    counter = counter + 1
    // console.log("addValue",counter);
    setCounter(counter) 
  }
  function removeValue(){
    counter = counter - 1
    // console.log("addValue",counter);
    setCounter(counter) 
  }
  return (
    <>
    <h1>React Hooks Example {counter}</h1>
    <h3>Counter : {counter}</h3>
    <button onClick={addvalue}>addValue {counter}</button>
    <button onClick={removeValue}>removeValue {counter}</button>
    </>
  )
}

export default App
