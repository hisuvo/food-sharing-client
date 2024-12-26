// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/carousel1.webp";
import bgimg2 from "../assets/carousel2.webp";
import bgimg3 from "../assets/carousel3.webp";
import bgimg4 from "../assets/carousel4.jpeg";
import bgimg5 from "../assets/carousel5.jpg";

export default function Carousel() {
  return (
    <div className=" md:mb-32">
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
          <SwiperSlide>
            <Slide image={bgimg4} text="Your Extra Can Be Someone's Enough" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* cards */}
      <div className="relative hidden md:block max-w-[950px] mx-auto">
        <div className="absolute -top-20 gap-4 md:gap-6 p-6 z-10 grid md:grid-cols-3">
          <div className=" p-4 transition-transform hover:scale-105 bg-[#1F2937] flex flex-col justify-between gap-2 text-white outline outline-offset-2">
            <h4 className="text-lg font-bold">Become a volunteer</h4>
            <p>Volunteer: Share time, make impact for communities.</p>
          </div>
          <div className=" p-4 transition-transform hover:scale-105 bg-[#1F2937] flex flex-col justify-between gap-2 text-white outline outline-offset-2">
            <h4 className="text-lg font-bold">Quick fundraising</h4>
            <p>Fast fundraising meet goals fuel positive transformations.</p>
          </div>
          <div className=" p-4 transition-transform hover:scale-105 bg-[#1F2937] flex flex-col justify-between gap-2 text-white outline outline-offset-2">
            <h4 className="text-lg font-bold">Start donating</h4>
            <p>Alone, I can do little. Together, we can do anything.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
