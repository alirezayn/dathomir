import {
  addFromLocalStorage,
  addToCart,
  decrease,
  increase,
} from "@/redux/reducer/StoreReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddToCart.module.scss";

import { TbMinus, TbPlus, TbShoppingCart } from "react-icons/tb";
import ProductPrice from "./ProductPrice";
//-----------------------------------------------------
const AddToCart = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const item = cart.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  //-----------------------------------------

  const addItemInCart = async () => {
    await dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.priceWithDiscount,
        quantity:1,
      })
      );
      
    // console.log(cart)
    // localStorage.setItem('cart',JSON.stringify(cart))
    // const cartItem = JSON.parse(localStorage.getItem('cart'))
    // let item = {id:product.id, name: product.name, price: product.price, quantity: 1 };
    // if(cartItem){
    //   localStorage.setItem("cart", JSON.stringify([...cartItem,item]));
    // }else{

    //   localStorage.setItem("cart", JSON.stringify([item]));
    // }
  };
  const increaseQuantity = async () => {
    await dispatch(increase(item));
    // let cartStorage =JSON.parse(localStorage.getItem('cart'))
    // const cartItem  = cartStorage.find(item=> item.id === product.id)
    // const cartIndex = cartStorage.findIndex(item=> item.id === product.id)
    // cartItem.quantity++;
    // cartStorage.splice(cartIndex,1)
    // localStorage.setItem('cart',JSON.stringify([...cartStorage,cartItem]))
    // setCounter(counter + 1)
  };
  const decreaseQuantity = async () => {
    await dispatch(decrease(item));
    // let cartStorage =JSON.parse(localStorage.getItem('cart'))
    // const cartItem  = cartStorage.find(item=> item.id === product.id)
    // const cartIndex = cartStorage.findIndex(item=> item.id === product.id)
    // if(cartItem.quantity===1){
    //   cartStorage.splice(cartIndex,1)
    //   localStorage.setItem('cart',JSON.stringify([...cartStorage,cartItem]))
    // }else{
    //   cartItem.quantity--;
    //   cartStorage.splice(cartIndex,1)
    //   localStorage.setItem('cart',JSON.stringify([...cartStorage,cartItem]))
    // }
    // setCounter(counter + 1)
  };
  return (
    <div className={`${styles.mainContainer}`}>
      <ProductPrice
        price={product.price}
        discount={product.priceWithDiscount}
      />
      {item ? (
        <div className={`${styles.mainButton}`}>
          <button className={`${styles.plusMinus}`} onClick={increaseQuantity}>
            <TbPlus />
          </button>
          <span>{item.quantity}</span>
          <button className={`${styles.plusMinus}`} onClick={decreaseQuantity}>
            <TbMinus />
          </button>
        </div>
      ) : (
        <button className={`${styles.addToCartButton}`} onClick={addItemInCart}>
          {"add to cart"} <TbShoppingCart />
        </button>
      )}
    </div>
  );
};

export default AddToCart;
