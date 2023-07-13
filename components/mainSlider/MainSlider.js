import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as api from "../../api/api";
import styles from "./MainSlider.module.scss";
const MainSlider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const slider = async () => {
      const data = await api.GET("public/mainSlider");
      const slider = await data.data;
      setData(slider);
    };
    slider();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };
  return (
    <div className={`${styles.mainSlider}`}>
      <Slider {...settings} autoplay={true}>
        {data.map((item) => {
          return (
            <Image
            className={`${styles.image}`}
              src={item.original}
              alt={`image ${item.id}`}
              key={item.id}
              width={1600}
              height={333}
              priority={true}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
