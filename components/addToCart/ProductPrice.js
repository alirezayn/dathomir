import React from "react";
import styles from "./productPrice.module.scss";
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
          {"قیمت"}&nbsp;{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h6>
          <h5 style={{ fontSize: "medium" }}>
            {"قیمت"}&nbsp;
            {discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h5>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
