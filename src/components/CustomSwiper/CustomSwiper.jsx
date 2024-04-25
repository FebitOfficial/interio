import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PrevButton from "../../assets/PrevButton";
import NextButton from "../../assets/NextButton";
import { Icon } from "@iconify/react";
// import PrevButton from "assets/Icons/Global/PrevButton";
// import NextButton from "assets/Icons/Global/NextButton";

const CustomSwiper = ({
  showButton,
  swiperSlideContent,
  breakpoints,
  paginated,
  type,
  id,
}) => (
  <div className="inventory-wrapper h-full">
    <div id="" className="relative h-full">
      <Swiper
        className="flex items-center"
        id="testimonials"
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
          nextEl: `.arrow-right-${id}`,
          prevEl: `.arrow-left-${id}`,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={paginated && { clickable: true }}
        breakpoints={breakpoints}
      >
        {swiperSlideContent}
        {showButton && type !== "full" && (
          <>
            {" "}
            <button
              className={`arrow-left-${id} absolute text-white lg:text-black  top-[50%] translate-y-[-50%] left-[5px] z-[999999999]`}
            >
              <PrevButton />
            </button>
            <button
              className={`arrow-right-${id} absolute text-white lg:text-black top-[50%] translate-y-[-50%] right-[5px] z-[999999999]`}
            >
              <NextButton />
            </button>
          </>
        )}
      </Swiper>
      {showButton && type === "full" && (
        <>
          {" "}
          <button className="arrow-left absolute text-white lg:text-black   top-[50%] translate-y-[-50%] left-[-55px] z-[999999999]">
            <Icon
              icon="akar-icons:chevron-left"
              className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
              style={{ color: "currentColor" }}
            />
          </button>
          <button className="arrow-right absolute text-white lg:text-black  top-[50%] translate-y-[-50%] right-[-55px] z-[999999999]">
            <Icon
              className="w-[24px] h-[24px]  md:w-[48px] md:h-[48px]"
              icon="akar-icons:chevron-left"
              rotate={"180deg"}
              style={{ color: "currentColor" }}
            />
          </button>
        </>
      )}
    </div>
  </div>
);

export default CustomSwiper;
