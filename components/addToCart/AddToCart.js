import { addToCart, decrease, increase } from "@/redux/features/StoreReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddToCart.module.scss";
import { FaTrashCan } from "react-icons/fa6";
import { TbMinus, TbPlus } from "react-icons/tb";
import ProductPrice from "./ProductPrice";
import { RiShoppingCartFill } from "react-icons/ri";
import { removeOrder } from "@/redux/features/OrderReducer";

//-----------------------------------------------------

const AddToCart = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order.order);
  const item = cart.find((item) => item.id === product.id);
  const dispatch = useDispatch();
    
  //-----------------------------------------

  const addItemInCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.priceWithDiscount,
        indexImageUrl: product.indexImageUrl,
        incredibleOffers: product.incredibleOffers,
        stock: product.stock,
        quantity: 1,
      })
    );
  };

  const increaseQuantity = () => {
    dispatch(increase(item));
  };

  const decreaseQuantity = () => {
    dispatch(decrease(item));
  };

  return (
    <div className={`${styles.mainContainer}`}>
      {item ? (
        <div className={`${styles.mainButton}`}>
          <button
            className={`${styles.plusMinus}`}
            onClick={increaseQuantity}
            disabled={item.quantity == product.stock ? true : false}
          >
            <TbPlus />
          </button>
          <div className={`${styles.quantity}`}>
            <span>{item.quantity}</span>
            {item.quantity == item.stock ? (
              <span style={{ opacity: ".3" }}>حداکثر</span>
            ) : null}
          </div>
          <button className={`${styles.plusMinus}`} onClick={decreaseQuantity}>
            {item.quantity == 1 ? <FaTrashCan /> : <TbMinus />}
          </button>
        </div>
      ) : (
        <>
          {product.stock > 0 ? (
            <button
              className={`${styles.addToCartButton}`}
              onClick={addItemInCart}
            >
              {"افزودن به سبد"} <RiShoppingCartFill />
            </button>
          ) : (
            <button className={`${styles.addToCartButton}`} disabled>
              ناموجود
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default AddToCart;
