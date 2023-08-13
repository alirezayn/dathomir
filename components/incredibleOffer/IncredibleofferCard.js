import React from "react";
import styles from "./IncredibleOfferCard.module.scss";
import IncredibleOfferBadge from "../incredibleOfferBadge/IncredibleOfferBadge";
import Image from "next/image";
import { useRouter } from "next/router";


const IncerdibleofferCard = ({ products }) => {
  const router = useRouter()
  const clickHandler = ()=>{
    router.push(`/products/${products.name}`)
  }
  return (
    <div className={`${styles.mainCard}`} onClick={clickHandler}>
      <IncredibleOfferBadge />
      <Image
        className={`${styles.image}`} 
        src={products.indexImageUrl} 
        alt={products.name} 
        width={100}
        height={100}
        />
        <h6>{products.name.substring(0,30)}{'...'}</h6>
    </div>
  );
};

export default IncerdibleofferCard;
