import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [charAllowed , setCharAllowed] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}<>?/';
  
    let characters = letters;
    let password = ''
    if(charAllowed) characters += specialChars;
    if(numberAllowed) characters += numbers;

    for (let i = 0; i <= length; i++) {
      let randomChar = Math.floor(Math.random()*characters.length)
      password += characters[randomChar];
    }

    setPassword(password)

  },[length,charAllowed,numberAllowed] )
// call passwordGenerator function 
  useEffect( ()=>{
      passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator] )
  //useRef
  const passwordRef = useRef(null)
  const copyPasswordClipBord = useCallback(()=>{
    passwordRef.current?.select()
    // window.navigator.clipboard.writeText(password)
  },[password] )
  // useEffect(()=>{},[])

  return (
    <>
    <div class="text-white">
      <h1>password Generator App</h1>
      <div>
        <input type="text" value={password}
        readOnly
        ref={passwordRef}/>
        <button
        onClick={copyPasswordClipBord}>copy it</button>
      </div>
      <div>
        <input type="range" min={6} max={100}
        onChange={(e)=>{setLength(e.target.value)}}//link b/w range and langth in ui
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <input id="numberAlloed" type="checkbox" defaultChecked={numberAllowed}
        onChange={()=>{setNumberAllowed( (prev) => !prev)}}
        />
        <label htmlFor="numberAlloed">Add Number</label>
      </div>
      <div>
        <input id="charAllowed" type="checkbox" defaultChecked={charAllowed}
        onChange={()=>{setCharAllowed( (prev) => !prev)}}
        />
        <label htmlFor="charAllowed">Add Special charector</label>
      </div>
    </div>
    </>
  )
}

export default App
