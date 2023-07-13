import React from "react";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import CartBadge from "./CartBadge";
import Link from "next/link";
import styles from "./Cart.module.scss";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const getTotalCart = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <>
      <Link href={"/checkout/cart"} className={`${styles.cartIcon}`}>
        <i>
          {cart.length > 0 ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
        </i>
        <CartBadge count={getTotalCart()} />
      </Link>
    </>
  );
};

export default Cart;
