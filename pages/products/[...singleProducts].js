import AddToCart from "@/components/addToCart/AddToCart";
import SingleContent from "@/components/SingleContent/SingleContent";
import SingleImageSlider from "@/components/SingleContent/singleImageSlider/SingleImageSlider";
import React from "react";
import * as api from "../../api/api";
import styles from "./singleProducts.module.scss";
const SingleProducts = (props) => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.rightContainer}`}>
      <SingleImageSlider name={props.data.name} images={props.data.images} />
      </div>
      <div className={`${styles.leftContainer}`}>

      </div>
      <SingleContent
        name={props.data.name}
        description={props.data.description}
      />
      <AddToCart product={props.data} />
    </div>
  );
};

export default SingleProducts;

export const getServerSideProps = async (context) => {
  try {
    let singleProductsData = await api.GET(
      `products/name/${context.params.singleProducts}`
    );
    singleProductsData = await singleProductsData.data;
    return {
      props: {
        data: singleProductsData,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
