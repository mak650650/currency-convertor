import { useCallback, useEffect, useState } from "react"
import Navbar from "./Component/Navbar"
import Inputbox from "./Component/Inputbox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
 
  const [amount , setAmount] = useState(0);
  const [convertedAmount , setConvertedAmount] = useState(0);
  const [from , setFrom] = useState('jpy');
  const [to , setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo);


  const onAmountChange = (amount) => {
      setAmount(amount)
  }
  const onCurrencyChangeOption1= (from) => {
      setFrom(from)
  }
  const onCurrencyChangeOption2= (to) => {
      setTo(to)
  }
  //Swap
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
 

 
  return (
    <>
    <div className="w-full  h-screen bg-no-repeat bg-cover bg-center bg-[url('/src/assets/bg.png')]">
       NAVBAR 
      <div className="bg-transparent  text-white flex columns-1">
        <Navbar />
      </div>
      HEAD
      <div className="text-white flex-col justify-center text-center mt-20 ">
        <div>
          <h1 className="text-5xl mb-5 max-[1200px]:text-4xl">Free Currency Conversion <span className="text-purple-600">APP</span></h1>
          <span className="text-gray-400 ">The 100% free solution for handling exchange rate conversions.
          </span>
        </div>
        <div className="my-16 flex justify-center">
          <div className="rounded-xl  py-5 px-2 flex flex-col justify-center gap-5 shadow-md  bg-slate-300 max-[1200px]:flex-col">  
          <div className="flex  max-[1200px]:flex-col gap-5">        
            <Inputbox 
              label='From' 
              amount={amount} 
              onAmountChange={onAmountChange}
              onCurrencyChange={onCurrencyChangeOption1}
              currencyOptions={option}
              selectCountry={from}
              amountDisable={false}
              currencyDisable={false}
              className='w-full'/>

            
              <div className="max-[1200px]:flex max-[1200px]:justify-center  max-[1200px]:mt-0 transition-all">
                <button className="rounded-3xl bg-purple-300 hover:bg-purple-200 text-black p-2 flex-col py-8 max-[1200px]:px-14 max-[1200px]:py-2  
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                onClick={() => swap()}>
                  <img 
                  src="https://i.imgur.com/pMLBhaM.png" 
                  alt="Swap" 
                  className="w-10 h-10"
                  />
                  </button>
              </div>
              <Inputbox 
              label='   To   ' 
              amount={convertedAmount}
              onAmountChange={onAmountChange}
              onCurrencyChange={onCurrencyChangeOption2}
              currencyOptions={option}
              selectCountry={to}
              amountDisable={true}
              currencyDisable={false}
              className='w-full'/>
              </div>  
              <div><button className="rounded-3xl transition ease-in-out delay-150 hover:bg-purple-200 hover:-translate-y-1 hover:scale-110 bg-purple-300 px-10 py-5 text-gray-700 duration-300"
              onClick={()=>(setConvertedAmount(amount * currencyInfo[to]))}>Convert from 
              <span className="text-black mx-1 hover:text-violet-700">{from.toUpperCase()} </span>
              to  
              <span className="text-black mx-1 hover:text-violet-700">{to.toUpperCase()}</span>
              </button></div>
          </div>
        </div>
      </div>
    </div>
  
    </>    
  )
}

export default App
