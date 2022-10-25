import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        breakpoints= {{
            500: {
              slidesPerView: 1
            },
            700: {
              slidesPerView: 1.5
            },
            900: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 4
              }
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        classNameName="mySwiper"
      >
        <SwiperSlide>
     <section className="home-testimonial">
     <div  className="react">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>React Developer</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/react.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section>
 </SwiperSlide>
        <SwiperSlide>     <section className="home-testimonial">
        <div  className="word">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>Wordpress Developer</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/wordpress.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section></SwiperSlide>
        <SwiperSlide>     <section className="home-testimonial">
        <div  className="php">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>PHP Developer</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/php.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section></SwiperSlide>
        <SwiperSlide>     <section className="home-testimonial">
        <div  className="cpro">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>C Programming</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/cpro.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section></SwiperSlide>
        <SwiperSlide>     <section className="home-testimonial">
        <div  className="photoshop">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>Photoshop Designing</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/photoshop.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section></SwiperSlide>
        <SwiperSlide>     <section className="home-testimonial">
        <div  className="github">
         <div className="container-fluid">
             <div className="row d-flex justify-content-center testimonial-pos">
            </div>
         </div></div>
     <section className="home-testimonial-bottom">
         <div className="container testimonial-inner">
             <div className="row d-flex justify-content-center">
                 <div className="col-lg-4 style-3">
                 <div className="tour-item ">
                         <div className="tour-desc bg-white">
                         <div className="link-name d-flex justify-content-center"><h4>GitHub</h4></div>
                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
                         <div className="d-flex justify-content-center pt-2 pb-2">
                             <img className="tm-people" src={process.env.PUBLIC_URL+"./image/github.png"} alt=""/>
                         </div>
                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </section></SwiperSlide>
      </Swiper>
    </>
  );
}










// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           type: "fraction",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         classNameName="mySwiper"
//       >
// <SwiperSlide>
//     <section className="home-testimonial">
//         <div className="container-fluid">
//             <div className="row d-flex justify-content-center testimonial-pos">
//                 <div className="col-lg-12 pt-4 d-flex justify-content-center">
//                     <h3>Testimonials</h3>
//                 </div>
//                 <div className="col-lg-12 d-flex justify-content-center">
//                     <h2>Explore the Skills experience</h2>
//                 </div>
//             </div>
//         </div>
//     <section className="home-testimonial-bottom">
//         <div className="container testimonial-inner">
//             <div className="row d-flex justify-content-center">
//                 <div className="col-lg-4 style-3">
//                 <div className="tour-item ">
//                         <div className="tour-desc bg-white">
//                         <div className="link-name d-flex justify-content-center"><h4>Wordpress Developer</h4></div>
//                         <div className="link-position d-flex justify-content-center">2 Year Experience | 8 Project</div> 
//                         <div className="d-flex justify-content-center pt-2 pb-2">
//                             <img className="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""/>
//                         </div>
//                         <div className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </section>
// </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
