import React from "react";
import CardAbbonamento from "./CardAbbonamento";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Box } from "@mui/system";

const AbbonamentoCarousel = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <SwiperSlide>
              <CardAbbonamento />
            </SwiperSlide>
            <SwiperSlide>
              <CardAbbonamento />
            </SwiperSlide>
            <SwiperSlide>
              <CardAbbonamento />
            </SwiperSlide>
          </Swiper>
        </Box>
      </div>
    </>
  );
};

export default AbbonamentoCarousel;
