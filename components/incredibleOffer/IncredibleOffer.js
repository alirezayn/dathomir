import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import Card from "../card/Card";
import CardSlider from "../cardSlider/CardSlider";
import styles from "./IncredibleOffer.module.scss";
const IncredibleOffer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const incredibleUrl = async () => {
      let url = await api
        .GET("products/incredibleOffers")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    incredibleUrl();
  }, []);
  return (
    <div className={`${styles.mainContainer}`}>
      <CardSlider dots={false}>
        {data.map((item) => {
          return <Card products={item} key={item.id} />
          
        })}
      </CardSlider>
    </div>
  );
};

export default IncredibleOffer;
