import { removeToken } from "@/redux/features/UserReducer";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const dashboard = () => {
  const userExist = useSelector((state) => state.user.token);
  const dispacth = useDispatch()
  const router = useRouter();
  const logoutUser = ()=>{
    dispacth(removeToken())
    router.push('/')
  }
  return (
  <>
  {userExist ?( 
    <div>
     dashboard
   
     <button onClick={logoutUser}>logout</button>
    </div> ):( 
    <div>
        please login
    </div>)}
    </>
    )
};

export default dashboard;
