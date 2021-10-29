
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./../style/slyder.css";
import { caruslArr } from "./../text_constant/constant"
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);


export default function Carusel() {

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    "rotate":85,
                    "stretch": 0,
                    "depth": 700,
                    "modifier": 1,
                    "slideShadows": true
                }}
                pagination={{
                    "clickable": true,
                }}

                navigation={true}
                autoplay={{
                    "delay": 3000,
                    "disableOnInteraction": false
                }}
                className="mySwiper">

                {caruslArr.map(value => {
                    return <SwiperSlide  key={value.id } ><img src={value.img}  key={value.id } alt = "img_slyder" /></SwiperSlide>
                })}

            </Swiper>
        </>
    )
}