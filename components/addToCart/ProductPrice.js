import React from "react";

const ProductPrice = ({ price, discount }) => {
  return (
    <div style={{width:"100%",textAlign:"left",marginTop:"15px",padding:"0px 15px",boxSizing:"border-box"}}>
      {discount == 0 ? (
        <h5 style={{fontSize:"medium"}}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
      ) : (
        <>
          <h6 style={{textDecoration:"line-through",opacity:".5" ,fontSize:"small"}}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h6>
          <h5 style={{fontSize:"medium"}}>{discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h5>
          
        </>
      )}
    </div>
  );
};

export default ProductPrice;
