import { createContext, useContext, useState } from "react";

export const MyContext = createContext()

export const callContext = () => {
    return useContext(MyContext)
}

export const ConState = ({children}) => {
    const[i, setI] = useState(0)
    const [o, setO] = useState(1)
    const [r, setR] = useState(0)

    return(
        <MyContext.Provider value={[i,o,r,setI,setO,setR]}>
            {children}
        </MyContext.Provider>
    )
}


