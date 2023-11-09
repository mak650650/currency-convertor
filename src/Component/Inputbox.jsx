import { useId } from "react"

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCountry = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const inputId = useId();
  return (
    <>
    <div className="flex justify-center">
        <div className={`bg-white  w-3/4 rounded-lg flex ${className}`}>
           <div className="w-1/2 mx-5 flex-col text-left my-2">
              <label 
              htmlFor={inputId}
              className="text-gray-400 font-sans first-line:text-xl inline-block">
                  {label}
              </label>
              <input 
              id={inputId}
              className="outline-none  w-full bg-transparent py-3.5 text-black  placeholder:text-gray-500"
              type="number" 
              value={amount}
              placeholder="Amount"
              disabled={amountDisable}
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
           </div>
           <div className="w-1/2 mx-5 flex flex-wrap justify-end my-2 text-right">
              <p className="text-black/40 mb-2 w-full">
                Currency Type
              </p>
              <select 
              className="outline-none  rounded-lg bg-gray-100 px-5 py-3.5 text-black  placeholder:text-gray-500"
              value={selectCountry} 
              disabled={currencyDisable}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                {currencyOptions.map( (currency) =>
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                )}

              </select>
           </div>
        </div>
    </div>
    
    </>
  )
}

export default Inputbox