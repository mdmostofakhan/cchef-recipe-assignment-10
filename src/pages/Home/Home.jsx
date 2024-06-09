import React from 'react';
import chef from '../../assets/chef.jpg'
import img from '../../assets/img.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className="w-full">
      <Swiper
  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-screen relative object-cover"
        
      > 
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={chef} alt="chef" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img} alt="Image " /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img1} alt="Image 1" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img2} alt="Image 2" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img3} alt="Image 3" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img4} alt="Image 4" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-[80%] object-cover" src={img5} alt="Image 5" /></SwiperSlide>
      
      </Swiper>
      <h1 className='text-white absolute top-80 z-10 bottom-0 left-56 text-4xl '>hello main up to the games</h1>

    </div>
  );
};

export default Home;
