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
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Navigation } from "swiper";
import IncerdibleofferCard from "./IncredibleofferCard";
import Image from "next/image";
import Link from "next/link";

const IncredibleOffer = () => {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(800)
  useEffect(() => {
    const incredibleUrl = async () => {
      let url = await api
        .GET("products/incredibleOffers")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    incredibleUrl();
    window.addEventListener('resize',()=>{
      setWidth(()=>window.innerWidth)
    })
  }, []);
  return (
    <div className={`${styles.mainContainer}`}>
      <Swiper
        style={{
          width: "95%",
        }}
        slidesPerView={5}
        spaceBetween={0}
        navigation={ width >= 800 ? true : false }
        freeMode={true}

        breakpoints={{
          300: {
            slidesPerView: 1
          },
          400: {
            slidesPerView: 2
          },
          500: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${styles.rightBox}`}>
            <Image
              src={"/images/amazingTypo.png"}
              alt="پیشنهاد شگفت انگیز"
              width={75}
              height={68}
              priority
            />
            <Image src={"/images/box.png"} alt="باکس" width={50} height={50} />
            <Link
              href={"/products/incredible_offer"}
              className={`${styles.link}`}
            >
              مشاهده همه
            </Link>
          </div>
        </SwiperSlide>
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
export default IncredibleOffer;
