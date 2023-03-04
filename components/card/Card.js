import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Card.module.scss";
import IncredibleOfferBadge from "../incredibleOfferBadge/IncredibleOfferBadge";
import Link from "next/link";
const Card = ({ products }) => {
  return (
    <div className={`${styles.cardSlider}`}>
      <Link href={`/products/${products.name}`}>
        <IncredibleOfferBadge />
        <Image
          src={products.indexImageUrl}
          alt={products.name}
          width={200}
          height={200}
        />
        <h6>
          {products.name.substring(0, 45)}
          {"..."}
        </h6>
      </Link>
    </div>
  );
};

export default Card;
