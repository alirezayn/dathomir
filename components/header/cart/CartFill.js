import React from "react";
import styles from "./CartFill.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeCart } from "@/redux/features/StoreReducer";
import IncredibleOfferBadge from "@/components/incredibleOfferBadge/IncredibleOfferBadge";
import AddToCart from "@/components/addToCart/AddToCart";
import {IoIosColorPalette} from "react-icons/io"
import { BsShieldFillCheck } from "react-icons/bs"
import { MdInventory } from "react-icons/md"
import Checkout from "./Checkout";
const CartFill = ({ items }) => {
  const dispatch = useDispatch();
  const data= [
    {
        color:"سفید",
        guarantee:"گارانتی 18 ماهه bESTshop",
        inventory:"موجود در انبار bESTshop",
    }
  ]
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.rightContainer}`}>
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
              </div>
              <div className={`${styles.leftItemContainer}`}>
                <h4>{item.name}</h4>
                    {data.map(item=>{
                        return <>
                            <h6><IoIosColorPalette style={{marginLeft:"10px"}}/> {item.color} </h6>
                            <h6><BsShieldFillCheck style={{marginLeft:"10px"}} />{item.guarantee}</h6>
                            <h6><MdInventory style={{marginLeft:"10px", color:"#369aec"}}/>{item.inventory}</h6>
                        </>
                    })}

              </div>
            </div>
          );
        })}
        {/* <button onClick={() => dispatch(removeCart())}>Clear Cart</button> */}
      </div>
      <div className={`${styles.leftContainer}`}>
        <Checkout />
      </div>
    </div>
  );
};

export default CartFill;
