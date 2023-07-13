// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Image from "next/image";
// // const SingleImgaeSlider = ({ images }) => {
// //   const settings = {
// //     customPaging: function (i) {
// //       return (
// //         <a>
// //           <img src={images[0].original} />
// //         </a>
// //       );
// //     },
// //     dots: true,
// //     dotsClass: "slick-dots slick-thumb",
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //   };
// //   return (
// //     <div style={{overflow:'hidden'}}>
// //       <h2>Custom Paging</h2>
// //       <Slider {...settings}>
// //         <div>
// //           {images.map((item) => {
// //             return <Image src={item.thumbnail} width={100} height={100} />;
// //           })}
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default SingleImgaeSlider;

import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import {Swiper} from "swiper/react"
import { SwiperSlide } from "swiper/react";
import styles from "./SingleImageSlider.module.scss";

// Import Swiper styles
// import "swiper/css"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import { Navigation , Thumbs, FreeMode } from 'swiper/modules';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"
import Image from "next/image";

const SingleImageSlider = ({ name, images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={`${styles.mainContainer}`}>
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#dfe0ed",
            "--swiper-pagination-color": "#dfe0ed"
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  className={`${styles.images}`}
                  alt={name}
                  src={item.original}
                  width={400}
                  height={400}
                  />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div>
        <Swiper
          // style={{
          //   width: "500px",
          // }}
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`mySwiper`}
          dir="rtl"
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Image
                  className={`${styles.images}`}
                  alt={name}
                  src={item.thumbnail}
                  width={100}
                  height={100}
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SingleImageSlider;
