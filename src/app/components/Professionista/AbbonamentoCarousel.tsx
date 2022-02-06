import React from "react";
import CardAbbonamento from "./CardAbbonamento";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import { Box } from "@mui/system";

const AbbonamentoCarousel = () => {
  return (
    <>
    <Box style={{display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center'}}>
     <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><CardAbbonamento /></SwiperSlide>
      <SwiperSlide><CardAbbonamento /></SwiperSlide>
      <SwiperSlide><CardAbbonamento /></SwiperSlide>

     
    </Swiper>
    </Box>
  
    </>
  );
};

export default AbbonamentoCarousel;
