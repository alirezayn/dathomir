import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import styles from "./DailyOffer.module.scss";
import Image from "next/image";
import { FaShopify } from "react-icons/fa6";
const DailyOffer = () => {
  const [data, setData] = useState([]);
  const min = Math.floor(Math.random() * (data.length - 5));

  useEffect(() => {
    const getDailyOffer = async () => {
      try {
        let data = await api.GET("products/dailySuggests");
        data = await data.data;
        setData(data);
      } catch {
        return console.log("error");
      }
    };
    getDailyOffer();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "5%" }}>
      <span className={`${styles.span}`}>
        پیشنهاد روزانه
        <i>
          <FaShopify />
        </i>
      </span>
      <div className={`${styles.mainContainer}`}>
        {data
          .map((item) => {
            return (
              <Link
                href={`products/${item.name}`}
                className={`${styles.dailyCards}`}
                key={item.id}
              >
                <div
                 
                  className={`${styles.content}`}
                >
                  <Image
                    src={item.indexImageUrl}
                    alt={item.name}
                    width={150}
                    height={150}
                  />
                  {item.name.substring(0, 40)}
                  {"..."}
                </div>
              </Link>
            );
          })
          .slice(min, min + 6)}
      </div>
    </div>
  );
};
export default DailyOffer;
