import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import * as api from "../../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Card from "../card/Card";
import SingleCard from "./SingleCard";

const Offer = ({ product, name }) => {
  return (
    <>
      <h6
        style={{
          margin: "15px",
          padding: "15px",
          border: "1px solid green",
          borderRadius: "5px",
          width: "200px",
          opacity: ".7",
          textAlign: "center",
        }}
      >
        دیگر محصولات مشابه
      </h6>
      <Swiper
        slidesPerView={8}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          1100:{
            slidesPerView:6
          },
          900:{
            slidesPerView:5
          },
          600:{
            slidesPerView:4
          },
          400:{
            slidesPerView:2
          }
        }}
      >
        {product
          .filter((item) => item.name != name)
          .map((item) => {
            return (
              <SwiperSlide key={item.id} >
                <SingleCard products={item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Offer;
