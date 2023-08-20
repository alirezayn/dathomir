import Card from "@/components/card/Card";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/api";
import styles from "./Category.module.scss";
import FilterList from "@/components/filterList/FilterList";
const category = ({ data }) => {
  // const object = { model: [], price:0 };
  const input = useRef();
  const [filter, setFilter] = useState([]);
  const route = useRouter();
  const siteMap = route.query.category;
  const onCheckBox = (e) => {
    // e.target.checked ? setFilter(e.target.name) : setFilter('');
    if (e.target.checked == true) {
      setFilter((item) => [...item, e.target.name]);
    }
    if (e.target.checked == false) {
      let checkValue =
        filter.length != 0
          ? filter.find((item) => item == e.target.name)
          : null;
          
      setFilter(filter.filter((item) => item != checkValue));
    }
  };
  const searchItems = (e) => {
    if (e.key == "Enter") {
      // const word = e.target.value;
      // const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
      setFilter(item=>[...item,e.target.value]);
      }
    };
    console.log(filter)

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta property="og:title" content={data.name} key="title" />
      </Head>
      <span style={{ display: "block", margin: "15px" }}>
        {"bestshop/"}
        {data.name}
      </span>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.leftContainer}`}>
          {data.products
            .filter((item) =>
              filter.length == 0
                ? item
                : filter.some((value) => item.name.includes(value))
            )
            .map((item) => {
              return <Card products={item} key={item.id} />;
            })}
        </div>
        <div className={`${styles.rightContainer}`}>
          <FilterList
            func={onCheckBox}
            searchFunc={searchItems}
            category={data.name}
          />
        </div>
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
      props: { data: response },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
