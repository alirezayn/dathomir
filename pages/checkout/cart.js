import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cart.module.scss";
import Head from "next/head";
import EmptyCart from "@/components/header/cart/EmptyCart";
import CartFill from "@/components/header/cart/CartFill";
import { removeOrder } from "@/redux/features/OrderReducer";

const cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const getAmount = cart.reduce(
    (amount, item) => amount + item.quantity * item.price,
    0
  );

  let getDiscount = cart.reduce(
    (amount, item) =>
      item.discount == 0
        ? amount + item.quantity * item.price
        : amount + item.quantity * item.discount,
    0
  );
  getDiscount = getAmount - getDiscount;

  const getTotal = getAmount - getDiscount;
    useEffect(()=>{
        if(localStorage.getItem('cart').length == 0){
          dispatch(removeOrder())
        }
    },[])

  return (
    <>
      <Head>
        <title>فروشگاه اینترنی bESTShop</title>
      </Head>
      {cart.length > 0 ? (
          <CartFill items={cart} getTotal={getTotal} getDiscount={getDiscount} getAmount={getAmount} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default cart;
