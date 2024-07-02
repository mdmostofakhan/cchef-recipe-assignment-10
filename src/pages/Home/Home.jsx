import React from "react";

import chef from "../../assets/chef.jpg";
import img from "../../assets/img.jpg";
// import img1 from '../../assets/img1.jpg'
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Recipe from "../recipe/Recipe";
import Card from "../card/Card";

const Home = () => {
  return (
    <div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper max-h-screen w-full object-cover"
        >
          <SwiperSlide>
            <img className="" src={chef} alt="chef" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" " src={img} alt="Image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" " src={img2} alt="Image 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" " src={img3} alt="Image 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" " src={img4} alt="Image 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" h-40vh object-cover" src={img5} alt="Image 5" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-black flex justify-center items-center ">
        <Recipe></Recipe>
      </div>
      <Card></Card>
    </div>
  );
};

export default Home;
