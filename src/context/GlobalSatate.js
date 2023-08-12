import { createContext, useState } from "react";

export const GlobalContext=createContext();

export const GlobalProvider=(props)=>{
    const [info, setInfo] = useState("");
    const [kontrol,setKontrol]=useState(false);

    return(
        <GlobalContext.Provider value={{
            info,
            setInfo,
            setKontrol,
            kontrol,
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}