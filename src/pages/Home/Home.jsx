import React, { useContext, useState } from "react";
import Intro from "./_components/Intro/Intro";
import SwiperSection from "../../components/SwiperSection/SwiperSection";
import Testimonials from "./_components/Testimonials/Testimonials";
import Contact from "./_components/Contact/Contact";
import { swiperContent } from ".";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext/HomeContext";
import close from "../../assets/close.png";
import Modal from "../../components/Modal/Modal";
import useDisclosure from "../../hooks/useDisclosure";
import CustomSwiper from "../../components/CustomSwiper/CustomSwiper";
import { SwiperSlide } from "swiper/react";
const Home = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { showContact } = useContext(HomeContext);
  const [hovered, setHovered] = useState(null);
  const [showFullImage, setShowFullImage] = useState(null);
  const textVariants = {
    initial: {
      x: 100,
      y: 0,
      opacity: 0.8,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        staggeredChildren: true,
      },
    },
  };
  const paraVariants = {
    initial: {
      x: 100,
      y: 0,
      opacity: 0.8,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        staggeredChildren: true,
      },
    },
  };
  const subTextVariants = {
    initial: {
      x: 100,
      y: 0,
      opacity: 0.8,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        staggeredChildren: true,
      },
    },
  };

  const [tag, setTag] = useState({ title: "", itemId: null });

  const handleShowTagImage = (imageList, itemId) => {
    if (itemId === tag?.itemId && tag?.title !== "All") {
      let res = imageList?.filter((value) => value?.tagName === tag?.title);
      return res;
    } else {
      return imageList;
    }
  };
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
    <>
      <Modal isOpen={isOpen}>
        <div className="relative max-w-[99%] mx-auto lg:max-w-[90%]">
          <CustomSwiper
            type={"full"}
            showButton
            paginated={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
            }}
            swiperSlideContent={swiperContent[showFullImage]?.images?.map(
              (item, index) => {
                return (
                  <SwiperSlide>
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      whileInView="animate"
                      className="w-full h-[100vh] flex justify-center items-center"
                    >
                      <img
                        src={item.link}
                        alt={item?.title}
                        className="w-full max-h-[100vh] object-cover"
                      />
                    </motion.div>
                  </SwiperSlide>
                );
              }
            )}
          />
        </div>
        <div
          className="absolute z-[99999999999] top-2 right-4 cursor-pointer"
          onClick={onClose}
        >
          <img src={close} className="w-6 h-6" />
        </div>
      </Modal>
      <Intro position={"fixed"} hovered={hovered} setHovered={setHovered} />
      <div className="relative z-[2]">
        <div className="h-[fit-content] z-[-1] opacity-0">
          <Intro
            position={"static"}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
        {swiperContent.map((item, idx) => {
          return (
            <>
              <section
                style={{ backgroundColor: item.bg, color: item.color }}
                className="max-h-[fit-content] w-[100%] m-auto py-[24px] lg:py-[64px] bg-[#5FBDFF] shadow-1"
              >
                <SwiperSection
                  onClick={(img) => {
                    onOpen();
                    setShowFullImage(idx);
                  }}
                  id={item.id}
                  images={handleShowTagImage(item.images, item?.id)}
                  sideContent={
                    <div
                      className="flex flex-col gap-[12px] lg:pt-[12px]"
                      style={{ color: item.color }}
                    >
                      <motion.p
                        variants={textVariants}
                        initial="initial"
                        whileInView="animate"
                        className="text-[48px] font-extrabold"
                      >
                        {item.title}
                      </motion.p>
                      <motion.p
                        variants={subTextVariants}
                        initial="initial"
                        whileInView={"animate"}
                        className="text-[30px] font-semibold"
                      >
                        {item.subTitle}
                      </motion.p>
                      <motion.div
                        variants={paraVariants}
                        initial="initial"
                        whileInView={"animate"}
                        className="flex flex-col gap-[10px] lg:mt-[56px] font-medium tracking-[1.34px]"
                      >
                        {item.textContent.map((text) => {
                          return <p className=" leading-[120%]">{text.desc}</p>;
                        })}
                      </motion.div>
                      <div className="flex flex-wrap items-center gap-[12px] mt-[32px]">
                        {item.tags?.map((val, index) => {
                          return (
                            // <a
                            //   href={item.link}
                            //   className=""
                            //   target="_blank"
                            //   rel="noreferrer"
                            // >
                            <a
                              href={`#${item?.id}`}
                              onClick={() =>
                                setTag({
                                  title: val?.title,
                                  itemId: item?.id,
                                })
                              }
                              style={{
                                backgroundColor:
                                  item.id === tag.itemId &&
                                  val.title === tag.title &&
                                  item.bg,
                                color:
                                  item.id === tag.itemId &&
                                  val.title === tag.title &&
                                  "white",
                              }}
                              className={`${
                                item.id === tag.itemId &&
                                val.title === tag.title
                                  ? `bg-[${item.bg}]`
                                  : "bg-white-gradient"
                              }
                                
                                  py-[7px] px-[12px] rounded-lg max-w-[fit-content] 
                                  text-[16px] font-semibold uppercase shadow-lg cursor-pointer`}
                            >
                              {val.title}
                            </a>
                            // </a>
                          );
                        })}
                      </div>
                    </div>
                  }
                />
              </section>
              {idx === 1 && <Testimonials />}
            </>
          );
        })}

        {/* <section className="max-h-[fit-content] rounded-[20px] w-[95%] m-auto shadow-1 my-[24px]  py-[32px] lg:py-[64px] bg-[#f9f9f9]">
              <SwiperSection
                images={swiperContent[swiperContent.length - 1].images}
                sideContent={
                  <div className="flex flex-col gap-[12px] text-neutral-700 lg:pt-[12px]">
                    <p className="text-[48px] font-extrabold">Heading</p>
                    <p className="text-[30px] font-semibold">Subheading</p>
                    <div className="flex flex-col lg:mt-[56px] gap-[10px] font-medium tracking-[1.34px]">
                      <p className=" leading-[120%]">
                        Id minim sunt est dolore proident duis ad commodo ullamco ex
                        eu cillum. Anim nulla reprehenderit deserunt sit.
                        Reprehenderit consequat velit in pariatur
                      </p>
                      <p className=" leading-[120%]">
                        Id minim sunt est dolore proident duis ad commodo ullamco ex
                        eu cillum. Anim nulla reprehenderit deserunt sit.
                        Reprehenderit consequat velit in pariatur aliquip. Id elit
                        tempor ad esse ut exercitation fugiat consequat magna magna
                        laborum amet. Occaecat labore ullamco proident ea enim.
                      </p>
                      <p className=" leading-[120%]">
                        Id minim sunt est dolore proident duis ad commodo ullamco ex
                        eu cillum. Anim nulla reprehenderit deserunt sit.
                        Reprehenderit consequat velit in pariatur aliquip. Id elit
                        tempor ad esse ut exercitation fugiat consequat magna magna
                        laborum amet. Occaecat labore ullamco proident ea enim.
                      </p>
                    </div>
                  </div>
                }
              />
            </section> */}
        <section className="bg-[#f9f9f9] opacity-0 relative z-[-2]">
          <Contact />
        </section>
        {showContact && (
          <section className="bg-[#f9f9f9]">
            <Contact position="fixed" zIndex={0} />
          </section>
        )}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
