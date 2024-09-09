import { createContext, useState } from "react";

export const context = createContext({})


const ContextProvider = (props) => {
    const [count, setCount] = useState(0);

   

    function Increment() {
        setCount(count +1)
    }

    function Decrement() {
        setCount(count -1)
    }

    const object = {Increment, Decrement, count}

     return <context.Provider value={object}>
       {props.children}
     </context.Provider>
}

export default ContextProvider;