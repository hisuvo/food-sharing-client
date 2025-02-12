// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/slider1.jpg";
import bgimg2 from "../assets/slider2.jpg";
import bgimg3 from "../assets/slider3.jpg";
import bgimg4 from "../assets/slider4.jpg";
import bgimg5 from "../assets/slider5.jpg";

export default function Carousel() {
  return (
    <div className=" md:mb-20">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
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
            <Slide
              image={bgimg1}
              text="Share to Care: Fighting Food Waste Together"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg2} text="Donate Food, Spread Hope" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg3} text="Reduce Waste, Nourish Lives" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg4} text="Turning Surplus Into Smiles" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={bgimg5} text="Your Extra Can Be Someone's Enough" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
