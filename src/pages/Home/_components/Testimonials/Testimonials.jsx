import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from ".";

// import PrevButton from "assets/Icons/Global/PrevButton";
// import NextButton from "assets/Icons/Global/NextButton";

const Testimonials = ({
  showButton,
  swiperSlideContent,
  breakpoints,
  paginated,
}) => (
  <div className="w-full h-full relative py-[64px] bg-[#f9f9f9]">
    <h1 className="w-[95%] m-auto text-neutral-800 pb-[32px] text-left text-[32px] md:text-[48px] font-extrabold">
      Testimonials
    </h1>
    <div className="text-black flex md:flex right-[5%] items-center gap-[12px] absolute top-[64px] md:top-[65px]">
      <button className="arrow-left">
        <Icon
          icon="akar-icons:chevron-left"
          className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
          style={{ color: "black" }}
        />
      </button>
      <button className="arrow-right">
        {" "}
        <Icon
          className="w-[24px] h-[24px]  md:w-[48px] md:h-[48px]"
          icon="akar-icons:chevron-left"
          rotate={"180deg"}
          style={{ color: "black" }}
        />
      </button>
    </div>
    <div id="" className="relative h-full">
      <Swiper
        className="flex items-center"
        id="testimonials-swiper-2"
        style={{
          display: "flex !important",
          alignItems: "center !important",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
          "--swiper-pagination-bullet-width": "5px",
          "--swiper-pagination-bullet-size": "5px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
        }}
        loop
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        navigation={{
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={paginated && { clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4.2,
            centeredSlides: true,
            spaceBetween: 20,
          },
        }}
      >
        {testimonials.map((item) => {
          return (
            <SwiperSlide>
              <div className="w-[95%] m-auto h-[460px] min-h-[360px] flex flex-col justify-between text-neutral-800 p-[12px] border-[2px] border-neutral-700">
                <div className="text-[16px] tracking-[1.25px] leading-[160%] flex flex-col gap-[12px]">
                  <p>{item.desc}</p>{" "}
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="">
                    <img
                      className="w-[56px] h-[56px] rounded-full overflow-hidden object-cover"
                      src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
                    />
                  </div>
                  <div className="text-black text-[12px]">
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);

export default Testimonials;
