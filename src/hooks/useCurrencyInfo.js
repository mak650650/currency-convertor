import { useEffect } from "react";
import { useState } from "react"


function useCurrencyInfo(currency){
    const [data ,setData] = useState({});
    const link = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect( () => { 
        fetch(link
        ).then((res)=>res.json()
        ).then((res)=>setData(res[currency]))
    }, [currency])
    return data
}

export default useCurrencyInfo