import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import styles from "./Categories.module.scss";
const Categories = () => {
  let imageData = {
    mobile:
      "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    tablet:
      "https://dkstatics-public.digikala.com/digikala-products/cdb29c80769b0967d550fb7c3b9e3d41bcc5c668_1678009665.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    laptop:
      "https://dkstatics-public.digikala.com/digikala-products/b2c0eb53f0eeacdefb8771155bf5e4887222a654_1672051046.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    camera:
    "https://dkstatics-public.digikala.com/digikala-products/1192481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
  };

  console.log();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        let data = await api.GET("products/categories");
        data = await data.data;
        setData(data);
      } catch {
        return console.log("error");
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
              <div className={`${styles.backStyle}`}>
              <Image
              className={`${styles.categoryImage}`}
                src={
                  item.name == "گوشی موبایل"
                    ? imageData.mobile
                    : item.name == "تبلت"
                    ? imageData.tablet
                    : item.name == "لپ تاپ"
                    ? imageData.laptop
                    : item.name == "دوربین دیجیتال"
                    ? imageData.camera
                    : ''
                }
                alt={
                  item.name == "گوشی موبایل"
                  ? "گوشی موبایل"
                  : item.name == "تبلت"
                  ? "تبلت"
                  : item.name == "لپ تاپ"
                  ?  "لپ تاپ"
                  : item.name == "دوربین دیجیتال"
                  ? "دوربین دیجیتال"
                  : ''
                }
                width={100}
                height={100}
              />
              </div>
              <span>
              {item.name}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
