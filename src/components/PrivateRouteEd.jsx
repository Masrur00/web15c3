import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextApi } from "./ContextApi";

export const PrivateRouteEd = ({children}) => {
     const { isAuth } = useContext(ContextApi);

     if(!isAuth){
         return <Navigate to="/login" />
     }
     
     return children;
}