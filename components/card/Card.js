import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Card.module.scss";
import IncredibleOfferBadge from "../incredibleOfferBadge/IncredibleOfferBadge";
import Link from "next/link";
import ProductPrice from "../addToCart/ProductPrice";
const Card = ({ products }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={`/products/${products.name}`} className={`${styles.link}`}>
        <div className={`${styles.topCard}`}>
          {products.incredibleOffers == true ? <IncredibleOfferBadge /> : null}
        </div>
        <div className={`${styles.middleCard}`}>
          <Image
            className={`${styles.image}`}
            src={products.indexImageUrl}
            alt={products.name}
            width={150}
            height={150}
          />
          <h6>
            {products.name.substring(0, 60)}
            {"..."}
          </h6>
        </div>
        <div className={`${styles.bottomCard}`}>
        <h6>
            {products.name.substring(0, 60)}
            {"..."}
          </h6>
          {products.stock === 0 ? (
            <span>ناموجود</span>
          ) : (
            <ProductPrice price={products.price} discount={products.priceWithDiscount} />
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
