import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoute = () => {
    const navigate = useNavigate();
    React.useEffect(()=>{
        return AuthCheck();
    },[auth]);
    const AuthCheck = onAuthStateChanged(auth,(user)=>{
        if(!user){
            navigate('/login')
        }
    }) 
    //console.log(auth);
    return <Outlet/>;
}
export default PrivateRoute;