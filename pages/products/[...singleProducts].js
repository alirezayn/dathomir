import SingleProduct from "@/components/SingleProduct/SingleProduct";
import { useRouter } from "next/router";
import React from "react";
import * as api from "../../api/api";
const SingleProducts = (props) => {
  const route = useRouter()
  const singleProductsMap = route;
  console.log(singleProductsMap)
  return (
    <>
      <SingleProduct 
      name={props.name}
      description={props.des} 
      
      />
    </>
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
        name: singleProductsData.name,
        des: singleProductsData.description,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
