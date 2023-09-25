import React from "react";
import styles from "./productPrice.module.scss";
import { numberSeperate } from "@/lib/numberSeperate";
const ProductPrice = ({ price, discount }) => {
  return (
    <div className={`${styles.mainContainer}`}>
      {discount == 0 ? (
        <span
          style={{
            fontSize: "medium",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
          }}
        >
          {"قیمت"}&nbsp;{numberSeperate(price)}
        </span>
      ) : (
        <>
          <h6
            style={{
              textDecoration: "line-through",
              opacity: ".5",
              fontSize: "small",
            }}
          >
            {numberSeperate(price)}
          </h6>
          <h5 style={{ fontSize: "medium" }}>
            {"قیمت"}&nbsp;
            {numberSeperate(discount)}
          </h5>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
