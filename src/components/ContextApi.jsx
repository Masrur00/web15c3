import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ContextApi = createContext();
 
export const ContextApiProvider = ({children})=> {    
    const [isAuth, setAuth] = useState(false);
    const [usernum,setUserNum] = useState(0); 
    const [terminated,setTerminated]   = useState(0);
    const [promoted,setPromoted]   = useState(0);
    const [tnew,setNew]   = useState(0);

useEffect(()=>{
    
    axios.get(`http://localhost:8080/employee`).then(({ data })=> setUserNum(data.length) )  
     
},[])
     return <ContextApi.Provider value={ {usernum , terminated ,promoted, tnew, isAuth } }>
         {children}
     </ContextApi.Provider>
}