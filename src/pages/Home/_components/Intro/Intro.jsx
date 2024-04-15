import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Logo from "../../../../assets/Logo";
import { motion } from "framer-motion";
import { footerIcons } from ".";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "@react-hook/media-query";
import { HomeContext } from "../../../../context/HomeContext/HomeContext";
const Intro = ({ position, hovered, setHovered }) => {
  const { setShowContact } = useContext(HomeContext);
  const isMid = useMediaQuery("only screen and (min-width:700px)");
  const [scrollY, setScrollY] = useState(0);
  const introRef = useRef();
  const navbarRef = useRef();
  const [introHeight, setIntroHeight] = useState(300);
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > introHeight + navbarRef?.current?.clientHeight + 300) {
      setShowContact(true);
    } else {
      setShowContact(false);
    }
    if (window.scrollY >= introHeight) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);
  useLayoutEffect(() => {
    if (introRef && introRef.current && navbarRef && navbarRef.current) {
      console.log(introRef);
      setIntroHeight(
        introRef.current?.clientHeight - navbarRef.current?.clientHeight
      );
    }
  }, [introRef, navbarRef]);
  console.log("introHeight", introHeight);
  console.log("scrollY", scrollY);
  const navbarVariants = {
    initial: {
      y: -10,
      x: 0,
      opacity: 0.3,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
  };
  console.log(hovered);
  const text1 = "Interiors with Civil Work - ".split(" ");
  const text2 = "Tiling, Electrical, Plumbing, POP & much more".split(" ");
  const bannerText = "Designed & Delivered".split(" ");
  return (
    <>
      {scrollY > introHeight && (
        <motion.div
          variants={navbarVariants}
          initial="initial"
          animate="animate"
          className={`  bg-bgPrimary shadow-1  text-textPrimary w-full pt-[12px] pb-[6px] fixed z-[3] top-0 h-[fit-content] } transition duration-300 ease-in`}
        >
          <nav
            className={`w-[95%]   m-auto flex-row-reverse lg:flex-row flex justify-center  items-center`}
          >
            {/* <div className="flex items-center gap-[10px]">
              <div className="bg-bgGold w-[8px] h-[8px] hidden lg:block rounded-full"></div>
              <p className="text-[24px] hidden lg:block font-medium">
                Available For Projects
              </p>
            </div> */}
            <div className="m-auto  flex flex-col gap-[22px] justify-center items-center text-[32px] font-bold">
              <div>
                <Logo w="200px" />
              </div>
              {/* <div className="h-[fit-content] w-full">
                <hr className="h-[2.5px] bg-bgPink w-full" />
                <hr className="h-[2px] bg-textGrey w-full" />
              </div> */}
              {/* <div className="flex justify-center items-center gap-[14px]">
                {footerIcons.map((item, idx) => (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                      className="flex items-center transition duration-300 ease md:hover:bg-[#f8faff] justify-center p-[2px] rounded-full bg-bgPink"
                    >
                      <Icon
                        icon={item.icon}
                        className="w-[20px] h-[20px]"
                        style={{
                          color: isMid && hovered === idx ? "#e76589" : "white",
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div> */}
            </div>
            {/* <div className="hidden lg:block ">
              <p className="text-textPrimary text-[18px] font-light">
                INTERIO@GMAIL.COM
              </p>
            </div> */}
          </nav>
        </motion.div>
      )}
      <section
        ref={introRef}
        style={{ position, opacity: scrollY > introHeight ? 0 : 1 }}
        className={`z-[1] transition-opacity duration-200 ease-linear top-0 max-h-[fit-content] bg-bgPrimary text-textPrimary pb-[24px]`}
      >
        {/* {scrollY < introHeight + 20 && ( */}
        <motion.div
          ref={navbarRef}
          initial={sticky ? "initial" : ""}
          animate={sticky ? "animate" : ""}
          className={`${
            sticky ? "bg-white" : ""
          } w-full pt-[4px] pb-[10px] mb-[18px] ${sticky && "z-[3]"} top-0  ${
            sticky && "shadow-lg"
          }  transition duration-300 shadow-1 !bg-opacity-80 shadow-sticky backdrop-blur-sm`}
        >
          <nav
            className={`w-[95%]   m-auto flex-row-reverse lg:flex-row flex justify-center items-center`}
          >
            {/* <div className="flex items-center gap-[10px]">
                <div className="bg-bgGold w-[8px] h-[8px] hidden lg:block rounded-full"></div>
                <p className="text-[24px] hidden lg:block font-medium">
                  Available For Projects
                </p>
              </div> */}
            <div className="m-auto  flex flex-col gap-[6px] justify-center items-center text-[32px] font-bold">
              <div>
                <Logo w="200px" />
              </div>
              {/* <div className="h-[fit-content] w-full">
                  <hr className="h-[2.5px] bg-bgPink w-full" />
                  <hr className="h-[2px] bg-textGrey w-full" />
                </div> */}
              <div className="flex justify-center items-center gap-[14px]">
                {footerIcons.map((item, idx) => (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div
                      style={{
                        backgroundColor: hovered === idx ? "#e76589" : "white",
                        border: "solid 1px #e76589",
                      }}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                      className={`flex items-center transition duration-300 ease justify-center p-[6px] rounded-full bg-bgPink`}
                    >
                      <Icon
                        icon={item.icon}
                        className="w-[18px] h-[18px]"
                        style={{
                          color: hovered === idx ? "white" : "#e76589",
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* <div className="hidden lg:block ">
                <p className="text-textPrimary text-[18px] font-light">
                  INTERIO@GMAIL.COM
                </p>
              </div> */}
          </nav>
        </motion.div>
        {/* )} */}
        <div className="text-[3vw] z-[1] md:pt-[14px] lg:pt-[0] text-textPrimary font-medium w-[95%] m-auto">
          <div className="text-[7vw] md:text-[4vw]">
            {text1.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.55,
                  delay: i / 3,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
          {text2.map((el, i) => (
            <motion.span
              className="text-[5vw] md:text-[3vw]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.55,
                delay: i / 3,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
        <section className=" max-h-[fit-content] w-[95%] mb-[-14px] m-auto flex flex-col gap-[-60vh]">
          <p className="text-textPink mt-[12px]  leading-[80%] p-0 m-0 text-size font-extrabold">
            {bannerText.map((el, i) => (
              <motion.span
                className="leading-[50%] p-0 m-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: i / 3,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
        </section>
        <div className=" hidden lg:flex flex-col gap-[-8px] absolute right-[10%] bottom-[10%]">
          {[1, 2].map((item, i) => (
            <motion.div
              animate={{
                opacity: 0,
                y: 20,
                transition: {
                  duration: 2,
                  deplay: 2 * i,
                  repeat: Infinity,
                },
              }}
            >
              <Icon
                icon="iconoir:fast-arrow-down"
                width="64"
                height="64"
                style={{ color: "#e76589" }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Intro;
