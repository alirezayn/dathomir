// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { NextArrow, PrevArrow } from './CustomArrow';

// const CardSlider = ({children,dots}) => {
//     const settings = {
//         dots: dots,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 3,
//         initialSlide:0,
//         rtl:false,
//         nextArrow:<NextArrow />,
//         prevArrow:<PrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1025,
//             settings: {
//               slidesToShow: 4,
//               slidesToScroll: 3,
//             //   infinite: true,
//             //   dots: dots,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 0,
//             },
//           },
//           {
//             breakpoint: 500,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               initialSlide:0,
//               centerMode:true,
              
//             },
//           },
//           {
//             breakpoint: 400,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               initialSlide:0,
//               centerMode:true,
              
//             },
//           },
//           {
//             breakpoint: 300,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               initialSlide:0,
//               centerMode:true,
              
//             },
//           },
//         ],
//       };
//     return (
//   <Slider {...settings}>
//     {children}
//   </Slider>
//         )
// }

// export default CardSlider
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const CardSlider = () => {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default CardSlider