import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../../assets/image/slide-img-1.jpg";
import sliderImg2 from "../../assets/image/slide-img-2.jpg";
import sliderImg3 from "../../assets/image/slide-img-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MyContainer from "../MyContainer/MyContainer";
const Slider = () => {
  return (
    <div>
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
        <SwiperSlide>
          <img className="h-[90vh] w-full" src={sliderImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[90vh] w-full" src={sliderImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[90vh] w-full" src={sliderImg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
