import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import styles from "./cart.module.scss";
import Head from "next/head";
import EmptyCart from "@/components/header/cart/EmptyCart";
import CartFill from "@/components/header/cart/CartFill";

const cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Head>
        <title>فروشگاه اینترنی bESTShop</title>
      </Head>
      {cart.length > 0 ? (
          <CartFill items={cart} />
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default cart;
