
import { Carousel } from 'react-bootstrap';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from '../SliderdummyImage/redowan-dhrubo-9-U5LhHn1Zs-unsplash.jpg';
import img2 from '../SliderdummyImage/s-o-c-i-a-l-c-u-t-_hwL-LeytRc-unsplash.jpg';
import img3 from '../SliderdummyImage/sebastian-coman-travel-dtOTQYmTEs0-unsplash.jpg';
//Autoplay,
const Slider = () => {
    return (
        <>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Carousel.Caption>
                        <h1 className=" justify-content-center">Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    <img src={img1} alt="" srcset="" />




                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" srcset="" />

                    <Carousel.Caption>
                        <h1 className=" justify-content-center">Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>

                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" srcset="" />

                    <Carousel.Caption>
                        <h1 className=" justify-content-center">Second slide label</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>

                </SwiperSlide>

            </Swiper>
        </>

    );
};

export default Slider;