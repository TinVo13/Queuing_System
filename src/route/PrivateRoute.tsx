import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoute = () => {
    const navigate = useNavigate();
    React.useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(!user){
                navigate('/login')
            }
        }) 
    },[auth]);
    //console.log(auth);
    return <Outlet/>;
}
export default PrivateRoute;