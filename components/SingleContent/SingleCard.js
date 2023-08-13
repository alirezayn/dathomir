import React from "react";
import styles from "./SingleCard.module.scss";
import Image from "next/image";
import ProductPrice from "../addToCart/ProductPrice";
import { useRouter } from "next/router";
import Link from "next/link";
const SingleCard = ({ products }) => {
  const route = useRouter();
  const clickHandler = () => {
    route.push(`/products/${products.name}`);
  };
  return (
    <div className={`${styles.mainContainer}`} onClick={clickHandler}>
      <div className={`${styles.top}`}>
        <Image
          src={products.indexImageUrl}
          alt={products.name}
          width={100}
          height={100}
          priority={true}
          className={`${styles.image}`}
        />
      </div>
      <div className={`${styles.middle}`}>
        <span>
          {products.name.substring(20)}
          {"..."}
        </span>
      </div>
      <div className={`${styles.bottom}`}>
        {products.stock == 0 ? <span>ناموجود</span> : (
          <ProductPrice
            price={products.price}
            discount={products.priceWithDiscount}
          />
        )}
      </div>
    </div>
  );
};

export default SingleCard;
