import React from "react";

import chef from "../../assets/chef.jpg";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Recipe = () => {
  return (
    <div className="my-20 w-full h-auto">
      <div className="text-center">
        <h1 className="text-blue-600 underline underline-offset-4 text-xl sm:text-2xl lg:text-3xl">
          TRADITION & INNOVATION
        </h1>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
          A UNIQUE LOCATION
        </h1>
      </div>
      <div className="mt-2 md:mt-16 flex flex-col md:flex-row md:w-[80%] mx-auto gap-8 md:gap-16">
        <div className="text-center md:text-right mt-4 md:mt-14 p-4">
          <p className="text-blue-500">1999</p>
          <h1 className="text-white text-xl mt-2">FIRST RESTAURANT</h1>
          <p className="mt-2 text-white lg:max-w-lg">
            LaTulipe offers a cuisine inspired by the local area, tradition and
            creativity in balanced combination quo an adhuc mediocritatem,
            augue. Pro sensibus gubergren an, esse ancillae principes ad vim.
            Vim libris maiorum corrumpit et, an vide malorum inimicus.
          </p>
          <div className="mt-8">
            <p className="text-blue-500">2008</p>
            <h1 className="text-white text-xl mt-2">MICHELIN STAR</h1>
            <p className="mt-2 text-white lg:max-w-lg">
              No mea noster fierent, sale verterem mel an. Elit ignota prodesset
              ei nec, quod purto causae vis at. Sit stet lucilius adipiscing ei,
              alii sanctus gubergren te qui.
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper lg:w-[500px] md:w[0px] w-[380px] rounded-t-full object-cover p-4"
          >
            <SwiperSlide>
              <img
                className="md:h-[550px] h-[300px] object-cover"
                src={chef}
                alt="chef"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-[550px] h-[300px] object-cover"
                src={img}
                alt="Image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="md:h-[550px] h-[300px] object-cover"
                src={img2}
                alt="Image 2"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:text-left text-center mt-4 md:mt-14 p-4">
          <p className="text-blue-500">2010</p>
          <h1 className="text-white text-xl mt-2">HOTEL OPENING</h1>
          <p className="mt-2 text-white  lg:max-w-lg">
            For a unique pleasure and relaxation experience you can try the
            swimming pool, the restaurants and bar or the outdoor activities.
            Pri magna congue minimum in, aliquip tibique intellegat sit ex. Cu
            case menandri pri, cu duo quodsi integre. Vis et dolor legimus
            legendos.
          </p>
          <div className="mt-8">
            <p className="text-blue-500">2024</p>
            <h1 className="text-white text-xl mt-2">LEGACY</h1>
            <p className="mt-2 text-white lg:max-w-lg">
              At ius invenire qualisque. Ea hinc timeam sit, nec eu esse alienum
              officiis. Vis sonet utroque accommodare ut, alia delectus nam at.
              Ut lorem possit deserunt has.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
