import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import styles from "./cart.module.scss";
import Head from "next/head";
import EmptyCart from "@/components/header/cart/EmptyCart";
import CartFill from "@/components/header/cart/CartFill";

const cart = () => {
  const cart = useSelector((state) => state.cart);
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
