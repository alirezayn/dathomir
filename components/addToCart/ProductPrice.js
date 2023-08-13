import React from "react";

const ProductPrice = ({ price, discount }) => {
  return (
    <div style={{width:"85%",textAlign:"left"}}>
      {discount == 0 ? (
        <h5>{price}</h5>
      ) : (
        <>
          <h6 style={{textDecoration:"line-through",opacity:".5"}}>{price}</h6>
          <h5>{discount}</h5>
          
        </>
      )}
    </div>
  );
};

export default ProductPrice;
