import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Card.module.scss";
import IncredibleOfferBadge from "../incredibleOfferBadge/IncredibleOfferBadge";
import Link from "next/link";
import AddToCart from "../addToCart/AddToCart";
const Card = ({ products }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={`/products/${products.name}`} className={`${styles.link}`}>
        <div className={`${styles.topCard}`}>
          <IncredibleOfferBadge />
        </div>
        <div className={`${styles.middleCard}`}>
          <Image
            className={`${styles.image}`}
            src={products.indexImageUrl}
            alt={products.name}
            width={100}
            height={100}
          />
        </div>
        <div className={`${styles.bottomCard}`}>
          <h6>
            {products.name.substring(0, 60)}
            {"..."}
          </h6>
          {products.stock === 0 ? (
            <span>ناموجود</span>
          ) : (
            <>
              {products.priceWithDiscount == 0 ? (
                <span>{products.price}</span>
              ) : (
                <>
                  <span
                    style={{ textDecoration: "line-through", color: "red" }}
                  >
                    {products.price}
                  </span>
                  <span>{products.priceWithDiscount}</span>
                </>
              )}
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
