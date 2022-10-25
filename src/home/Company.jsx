import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
function Company() {
  return (
    <>
         <h2 className="py-5 text-center">SOME BRANDS I'VE WORKED WITH</h2>
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
   
        <SwiperSlide>
            <div> 
               <img src={process.env.PUBLIC_URL+"./image/company1.png"}/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-item-center'>
            <div> 
                <img src={process.env.PUBLIC_URL+"./image/company2.png"}/> 
            </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-item-center'>
            <div>
                  <img src={process.env.PUBLIC_URL+"./image/company3.png"}/>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide className='d-flex justify-content-center align-item-center'><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100" height="100"/></SwiperSlide>
        <SwiperSlide className='d-flex justify-content-center align-item-center'><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100" height="100"/></SwiperSlide> */}
        {/* <SwiperSlide><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100"/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100"/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100"/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL+"./image/company.png"} width="100"/></SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default Company