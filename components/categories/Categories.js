import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import styles from "./Categories.module.scss";
const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        let data = await api.GET("products/categories");
        data = await data.data;
        setData(data);
      } catch {
        return console.log(axios.AxiosError);
      }
    };
    getCategories();
  }, []);
  return (
    <div className={`${styles.mainContainer}`}>
      {data.map((item) => {
        return (
          <div className={`${styles.cards}`} key={item.id}>
            <Link href={`/category/${item.name}`} className={`${styles.link}`}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
