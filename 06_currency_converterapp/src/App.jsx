import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import {InputBox} from './components'//index.js

import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  //useCurrencyInfo return object that holded by currencyInfo  
  const currencyInfo = useCurrencyInfo(from)
  
  //find the all currency options:means all keys ob the objects  
  const currencyOptions = Object.keys(currencyInfo)

  //swap function:
  const swap =()=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //when the user click convert:
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  //when currency change:
  // const handleCurrencyChange = (currency)=>{
  //   setFrom(currency)
  // }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                // backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount)=>{setAmount(amount)}}
                                onCurrencyChange={(currency)=>{                                    
                                  setFrom(currency)
                                //   setAmount(amount)
                                }}
                                currencyOptions={currencyOptions}
                                selectCurrency = {from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div> 
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                amountChangeDisable={true}
                                
                                onCurrencyChange={(currency)=>{
                                  setTo(currency)
                                }}
                                currencyOptions={currencyOptions}
                                selectCurrency = {to}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App


// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
