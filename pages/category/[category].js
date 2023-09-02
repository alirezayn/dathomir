import Card from "@/components/card/Card";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/api";
import styles from "./Category.module.scss";
import FilterList from "@/components/filterList/FilterList";
const category = ({ data }) => {
  const [filter, setFilter] = useState({model:[],capacity:[]});
  
  const route = useRouter();
  const siteMap = route.query.category;
  
  const onCheckBox = (e) => {
    // e.target.checked ? setFilter(e.target.name) : setFilter('');
    if (e.target.checked == true) {
      setFilter((items)=> ({...items,model:[...items.model,e.target.name]}));
    }
    // if (e.target.checked == false) {
    //   let checkValue =
    //     filter.model.length != 0
    //       ? filter.model.find((item) => item == e.target.name ? console.log(true) : console.log(false))
    //       : null
    //       const results = filter.model.filter(item=>item != checkValue)
    //       console.log(results)
      // setFilter(items=>({...items,model:filter.model.filter((item) => item != checkValue)}));
      // setFilter(items=>({...items,model:[]}))
      // setFilter(items=>(items.model.filter(item=>item != checkValue)))
    // }
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
            // .filter((item) => {
              
            //   return filter.length == 0
            //     ? item
            //     : filter.find(value=>item.name.includes(value))
            // })
            .map((item) => {
              return <Card products={item} key={item.id} />;
            })}
        </div>
        <div className={`${styles.rightContainer}`}>
          <FilterList func={onCheckBox} category={data.name} />
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
