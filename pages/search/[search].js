import React from "react";
import * as api from "../../api/api";
import Card from "@/components/card/Card";
import Head from "next/head";
const search = ({ searchResult }) => {
  return (
    <>
    <Head>
      <title>
      bESTShop فروشکاه اینترنتی 
      </title>
    </Head>
      {searchResult.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {searchResult.map((item) => {
            return <Card products={item} key={item.id} />;
          })}
        </div>
      ) : (
        <h5>جستجوی شما یافت نشد</h5>
      )}
    </>
  );
};

export default search;

export const getServerSideProps = async (context) => {
  let data = await api
    .GET(`products/search/${context.params.search}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    props: {
      searchResult: data,
    },
  };
};
