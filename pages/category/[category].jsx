import Card from "@/components/card/Card";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import * as api from "../../api/api";
import styles from "./Category.module.scss";
import FilterList from "@/components/filterList/FilterList";
import Sort from "@/components/sort/Sort";
import { BsFilterLeft } from "react-icons/bs";
const category =  ({ data, loading }) => {
  // const [isloading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({ model: [], capacity: [] });
  const [sort, setSort] = useState("");
  const [show, setShow] = useState(false)
  const onCheckBox = (e) => {
    if (e.target.checked == true) {
      setFilter((items) => ({
        ...items,
        model: [...items.model, e.target.name],
      }));
    }
    if (e.target.checked == false) {
      let checkValue =
        filter.model.length != 0
          ? filter.model.find((item) => item == e.target.name)
          : null;
      setFilter((items) => ({
        ...items,
        model: filter.model.filter((value) => value != checkValue),
      }));
    }
  };
  const showHandler = ()=>{
    setShow(!show)
  }
  const onCheckCapacity = (e) => {
    if (e.target.checked == true) {
      setFilter((items) => ({
        ...items,
        capacity: [...items.capacity, e.target.name],
      }));
    }
    if (e.target.checked == false) {
      let checkValue =
        filter.capacity.length != 0
          ? filter.capacity.find((item) => item == e.target.name)
          : null;
      setFilter((items) => ({
        ...items,
        capacity: filter.capacity.filter((value) => value != checkValue),
      }));
    }
  };
  const sortHandler = (e) => {
    setSort(e.target.innerHTML);
    if (e.target.innerHTML == sort) {
      setSort("");
    }
  };
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta property="og:title" content={data.name} key="title" />
      </Head>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={`${styles.mainContainer}`}>
          <div className={`${styles.leftContainer}`}>
            <div className={`${styles.top}`}>
              <Sort sortHandler={sortHandler} sortData={sort} />
            </div>
            <hr />
            <div className={`${styles.bottom}`}>
              {data.products
                .filter((item) => {
                  if (filter.model.length == 0 && filter.capacity.length == 0) {
                    return item;
                  }
                  if (filter.model.length > 0 && filter.capacity.length > 0) {
                    return (
                      filter.model.some((value) => item.name.includes(value)) &&
                      filter.capacity.some((value) => item.name.includes(value))
                    );
                  }
                  if (filter.model.length > 0) {
                    return filter.model.some((value) =>
                      item.name.includes(value)
                    );
                  }
                  if (filter.capacity.length > 0) {
                    return filter.capacity.some((value) =>
                      item.name.includes(value)
                    );
                  }
                })
                .sort((a, b) => {
                  if (sort == "") {
                    return null;
                  }
                  if (sort == "ارزانترین") {
                    return a.price - b.price;
                  }
                  if (sort == "گرانترین") {
                    return b.price - a.price;
                  }
                  if (sort == "نام") {
                    if (a.name > b.name) {
                      return 1;
                    }
                    if (a.name < b.name) {
                      return -1;
                    }
                    return 0;
                  }
                })
                .map((item) => {
                  return <Card products={item} key={item.id} />;
                })}
            </div>
          </div>
          <div className={`${styles.rightContainer}`} >
            <FilterList
              checkModel={onCheckBox}
              checkCapacity={onCheckCapacity}
              category={data.name}
              show={show}
              hide={showHandler}
            />
            <i onClick={showHandler}><BsFilterLeft/> &nbsp;فیلتر</i>
          </div>
        </div>
      )}
    </>
  );
};

export default category;

export const getServerSideProps = async (context) => {
  try {
    const url = await api.GET(`products/category/${context.params.category}`);
    const response = await url.data;
    return {
      props: { data: response},
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
