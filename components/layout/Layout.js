import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { addFromLocalStorage } from "@/redux/features/StoreReducer";
import { addTokenFromLocalStorage } from "@/redux/features/UserReducer";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const registerPath = "/user/register"
  const loginPath = "/user/login"
  const [show, setShow] = useState()

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch(addFromLocalStorage());
    }
    
    if (Cookies.get("token")) {
      dispatch(addTokenFromLocalStorage());
    }
  }, [1]);
  return (
    <>
      
      {router.pathname == registerPath || router.pathname == loginPath ? null : <Header />}
      {children}
      {router.pathname == registerPath || router.pathname == loginPath   ? null : <Footer />}
    </>
  );
};

export default Layout;
