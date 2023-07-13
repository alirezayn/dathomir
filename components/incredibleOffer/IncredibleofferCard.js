import React from "react";
import styles from "./IncredibleOfferCard.module.scss";
import IncredibleOfferBadge from "../incredibleOfferBadge/IncredibleOfferBadge";
import Image from "next/image";


const IncerdibleofferCard = ({ products }) => {
  return (
    <div className={`${styles.mainCard}`}>
      <IncredibleOfferBadge />
      <Image
        className={`${styles.image}`} 
        src={products.indexImageUrl} 
        alt={products.name} 
        width={100}
        height={100}
        />
    </div>
  );
};

export default IncerdibleofferCard;
