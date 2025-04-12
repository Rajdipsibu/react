import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom App | chai</h1>
    </div>
  )
}

const anotherEle = (
  <a href="#"> click another</a>
)
const anotherUser = "react with Rajdip"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'google',
  anotherEle
)

// createRoot(document.getElementById('root')).render(
//   <>
//   <App/>
//   </>
// )
createRoot(document.getElementById('root')).render(
  reactElement
)
