import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {FreeMode, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
export default function App() {
  return (
    <>
       <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide1.png"}/></SwiperSlide>
        <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide2.png"}/></SwiperSlide>
        <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide3.png"}/></SwiperSlide>
        <SwiperSlide><img className="slider-img" src={process.env.PUBLIC_URL+"./image/slide4.png"}/></SwiperSlide>
      </Swiper>
    </>
  );
}