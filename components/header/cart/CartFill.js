import React, { useEffect } from "react";
import styles from "./CartFill.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "@/redux/features/StoreReducer";
import IncredibleOfferBadge from "@/components/incredibleOfferBadge/IncredibleOfferBadge";
import AddToCart from "@/components/addToCart/AddToCart";
import { IoIosColorPalette } from "react-icons/io";
import { BsCartX, BsShieldFillCheck } from "react-icons/bs";
import { MdInventory } from "react-icons/md";
import Checkout from "./Checkout";
import CheckOrders from "./CheckOrders";
import { removeOrder, submitOrder, submitProducts } from "@/redux/features/OrderReducer";
import ProductPrice from "@/components/addToCart/ProductPrice";

const CartFill = ({ items, getTotal, getDiscount, getAmount }) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.order);

  const data = [
    {
      color: "سفید",
      guarantee: "گارانتی 18 ماهه bESTshop",
      inventory: "موجود در انبار bESTshop",
    },
  ];
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.rightContainer}`}>
        <button onClick={()=>{dispatch(removeCart() , dispatch(removeOrder()))}} className={`${styles.removeCart}`} ><BsCartX /> پاک کردن سبد</button>
        <span className={`${styles.span}`}>سبد خرید شما</span>
        {items.map((item) => {
          return (
            <div className={`${styles.itemCart}`} key={item.id}>

              <div className={`${styles.rightItemContainer}`}>
                <Image
                  src={item.indexImageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                {item.offer ? <IncredibleOfferBadge /> : null}
                <AddToCart product={item} />
                <ProductPrice price={item.price} discount={item.discount} />

              </div>

              <div className={`${styles.leftItemContainer}`}>
                <h4>{item.name}</h4>
                {data.map((item, index) => {
                  return (
                    <div key={index}>
                      <h6>
                        <IoIosColorPalette /> {item.color}{" "}
                      </h6>
                      <h6>
                        <BsShieldFillCheck />
                        {item.guarantee}
                      </h6>
                      <h6>
                        <MdInventory />
                        {item.inventory}
                      </h6>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}

      </div>

      <div className={`${styles.leftContainer}`}>
        {Object.keys(order).length > 0 ? (
          <CheckOrders cart={items} getTotal={getTotal} getDiscount={getDiscount} getAmount={getAmount} />
        ) : (
          <Checkout />
        )}
      </div>
    </div>
  );
};

export default CartFill;
