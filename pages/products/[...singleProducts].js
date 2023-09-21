import AddToCart from "@/components/addToCart/AddToCart";
import SingleContent from "@/components/SingleContent/SingleContent";
import SingleImageSlider from "@/components/SingleContent/singleImageSlider/SingleImageSlider";
import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import styles from "./singleProducts.module.scss";
import ProductPrice from "@/components/addToCart/ProductPrice";
import SmallSpecs from "@/components/SingleContent/SmallSpecs";
import Benefits from "@/components/addToCart/Benefits";
import AvailableInStock from "@/components/addToCart/AvailableInStock";
import Offer from "@/components/SingleContent/Offer";
import Optional from "@/components/SingleContent/Optional";
import FreeShipment from "@/components/SingleContent/FreeShipment";
import Link from "next/link";
const SingleProducts = (props) => {
  return (
    <>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.rightContainer}`}>
          <SingleImageSlider
            name={props.data.name}
            images={props.data.images}
          />
        </div>
        <div className={`${styles.leftContainer}`}>
          <div className={`${styles.rightBox}`}>
            <h1>{props.data.name}</h1>
            <hr />
            <SmallSpecs />
            <Optional />
            <FreeShipment />
          </div>
          <div className={`${styles.leftBox}`}>
            <div className={`${styles.top}`}>
              <Benefits data={props.data} />
            </div>
            <div className={`${styles.middle}`}>
              <AvailableInStock />
            </div>
            <div className={`${styles.bottom}`}>
              {props.data.stock == 0 ? null : (
                <ProductPrice
                  price={props.data.price}
                  discount={props.data.priceWithDiscount}
                />
              )}
              <AddToCart product={props.data} />
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{width:"95%",margin:"0 auto"}}> */}
      <Offer
        product={props.products.items}
        route={props.products.dynamic}
        name={props.data.name}
      />
      {/* </div> */}
      <SingleContent
        name={props.data.name}
        description={props.data.description}
      />
    </>
  );
};

export default SingleProducts;

export const getServerSideProps = async (context) => {
  let dataOffers = { items: [], dynamic: "" };
  try {
    let singleProductsData = await api.GET(
      `products/name/${context.params.singleProducts}`
    );
    singleProductsData = await singleProductsData.data;
    let products = await api.GET(`products/categories`);
    products = await products.data;
    
    products.map((item) => {
      if (item.products.find((obj) => obj.name == singleProductsData.name)) {
        item.products.map((item) => dataOffers.items.push(item));
        dataOffers.dynamic = item.name;
      }
    });
    return {
      props: {
        data: singleProductsData,
        products: dataOffers,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
