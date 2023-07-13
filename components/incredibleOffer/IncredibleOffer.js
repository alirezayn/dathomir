import React, { useEffect, useState } from "react";
import * as api from "../../api/api";
import Card from "../card/Card";
import CardSlider from "../cardSlider/CardSlider";
import styles from "./IncredibleOffer.module.scss";
// import { Swiper } from "swiper";

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import './styles.css'
// // import required modules
// import { Pagination } from 'swiper/modules';
// import { SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import IncerdibleofferCard from "./IncredibleofferCard";
import Image from "next/image";
import Link from "next/link";

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
      <div className={`${styles.rightBox}`}>
        <Image
          src={"/images/amazingTypo.png"}
          alt="پیشنهاد شگفت انگیز"
          width={75}
          height={68}
          priority
        />
        <Image 
          src={'/images/box.png'}
          alt="باکس"
          width={50}
          height={50}
        />
        <Link href={'/products/incredible_offer'} className={`${styles.link}`}>مشاهده همه</Link>
      </div>
      <Swiper
        style={{
          width:"85%"
        }}
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1100: {
            slidesPerView: 4,
          },
          1200:{
            slidesPerView:6
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <IncerdibleofferCard products={item} key={item.id} />
            </SwiperSlide>
              );
            })}
        
      </Swiper>
      {/* <CardSlider>
      {data.map((item) => {
          return (
            <Card key={item.id} products={item} />
          )
        })}
          </CardSlider> */}
    </div>
  );
};
export default IncredibleOffer