import Card from "@/components/card/Card";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import * as api from "../../api/api";
import styles from "./Category.module.scss";
const category = (props) => {
  const route = useRouter();
  const siteMap = route.query.category;
  return (
    <>
      <Head>
        <title>{props.name}</title>
        <meta property="og:title" content={props.name} key="title" />
      </Head>
      
      {siteMap.map((item, index) => (
        <span key={index}>
          {item} {"/"}
        </span>
      ))}
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.rightContainer}`}>
          {props.products.map((item) => {
            return <Card products={item} key={item.id} />;
          })}
        </div>
        <div className={`${styles.leftContainer}`}></div>
      </div>
    </>
  );
};

export default category;

export const getServerSideProps = async (context) => {
  try {
    const url = await api.GET(`products/category/${context.params.category}`);
    const response = await url.data;
    return {
      props: response,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
