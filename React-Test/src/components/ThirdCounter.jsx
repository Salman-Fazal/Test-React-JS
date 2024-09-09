import React, { useContext } from 'react'

import {context} from '../context/ContextProvider'


const ThirdCounter = () => {

    const data = useContext(context)
  return (
    <div>
    <button onClick={()=> data.Increment()}>Increment</button>
    <p>{data.count}</p>
    <button onClick={()=> data.Decrement()}>Decrement</button>
    
    </div>
  )
}

export default ThirdCounter
