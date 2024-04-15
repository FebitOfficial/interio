import React from "react";
import CustomSwiper from "../CustomSwiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import Swiper1 from "../../assets/Section1/swiper1.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const SwiperSection = ({ id, sideContent, images, onClick }) => {
  const isMid = useMediaQuery("only screen and (min-width:700px)");

  const imageVariants = {
    initial: {
      scale: 0.9,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div
      id={!isMid && id}
      className="max-w-[99%] px-[6px] lg:px-[24px] lg:max-w-[90%] text-white mx-auto flex-col lg:flex-row flex items-start gap-[48px]"
    >
      <div className="max-w-[99%] mx-auto lg:max-w-[70%]">
        <CustomSwiper
          id={id}
          showButton
          paginated={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
          }}
          swiperSlideContent={images?.map((item, index) => {
            return (
              <SwiperSlide>
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  whileInView="animate"
                  className="w-full"
                >
                  <img
                    src={item.link}
                    onClick={() => onClick(item)}
                    alt={item?.title}
                    className="w-full lg:max-h-[700px] max-h-[400px] object-contain lg:object-cover rounded-[10px]"
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        />
      </div>
      <div className="w-[97%] mx-auto lg:w-[30%]">{sideContent}</div>
    </div>
  );
};

export default SwiperSection;
