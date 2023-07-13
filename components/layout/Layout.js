import React, {  useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { useDispatch, useSelector } from "react-redux";
import { addFromLocalStorage } from "@/redux/features/StoreReducer";
import { addTokenFromLocalStorage } from '@/redux/features/UserReducer';
import Cookies from 'js-cookie';



const Layout = ({children}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('cart')){
      dispatch(addFromLocalStorage())
    }
    if(Cookies.get('token')){
      dispatch(addTokenFromLocalStorage())
    }
  },[1])
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout