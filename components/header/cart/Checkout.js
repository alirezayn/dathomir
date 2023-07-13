import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const getAmount = cart.reduce(
    (amoubt, item) =>
      amoubt +
      item.quantity * (item.discount == 0 ? item.price : item.discount),
    0
  );
  return <div>{getAmount}</div>;
};

export default Checkout;
