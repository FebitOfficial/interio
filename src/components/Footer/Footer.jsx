import Logo from "../../assets/Logo";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import {
  footerIcons,
  footerTabs1,
  footerTabs2,
  footerTabsItems1,
  footerTabsItems2,
} from "./index";

const Footer = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex2, setTabIndex2] = useState(0);

  return (
    <footer className="flex  flex-col gap-[20px]  justify-center  text-white">
      <div className="bg-bgSecondary pt-[65px]">
        <h1 className="w-[96%] md:w-[90%] text-[22px] md:text-[28px] font-medium m-auto">
          We Commit To Perfection!!
        </h1>
        <p className="w-[96%] md:w-[90%] m-auto py-[15px] text-[14px] font-light leading-[170%]">
          {" "}
          Lorem elit labore quis veniam et ipsum in. Sint dolor laboris aliquip
          deserunt duis ex. Dolor nostrud elit incididunt excepteur aute nostrud
          eu dolor velit. Elit mollit aliqua occaecat aute veniam ex laborum
          aliquip anim sit fugiat adipisicing est reprehenderit. Lorem elit
          labore quis veniam et ipsum in. Sint dolor laboris aliquip deserunt
          duis ex. Dolor nostrud elit incididunt excepteur aute nostrud eu dolor
          velit. Elit mollit aliqua occaecat aute veniam ex laborum aliquip anim
          sit fugiat adipisicing est reprehenderit. Lorem elit labore quis
          veniam et ipsum in. Sint dolor laboris aliquip deserunt duis ex. Dolor
          nostrud elit incididunt excepteur aute nostrud eu dolor velit. Elit
          mollit aliqua occaecat aute veniam ex laborum aliquip anim sit fugiat
          adipisicing est reprehenderit.{" "}
        </p>
        <div className=" bg-bgSecondary py-[20px] w-[96%]  md:w-[90%] m-auto">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="flex gap-[20px]  bg-bgSecondary w-[max-content]">
              {footerTabs1.map((item, idx) => (
                <Tab
                  className={`${
                    tabIndex === idx
                      ? "border-b-[1px] border-neutral-100"
                      : "border-none"
                  } outline-none font-semibold text-[14px] cursor-pointer`}
                >
                  {item.title}
                </Tab>
              ))}
            </TabList>
            <div className="py-[15px] m-auto">
              {footerTabsItems1.map((item) => (
                <TabPanel className="flex flex-wrap gap-[10px] ">
                  {item.map((link) => (
                    <Link to={link.path}>
                      <p className="flex items-center gap-[8px] text-white ">
                        <span className="text-[14px] pt-[5px] font-light">
                          {link.title}
                        </span>{" "}
                        <span> |</span>
                      </p>
                    </Link>
                  ))}
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
        <div className="w-[96%] md:w-[90%] m-auto bg-bgSecondary py-[20px]">
          <Tabs
            selectedIndex={tabIndex2}
            onSelect={(index) => setTabIndex2(index)}
          >
            <div className="hide-scrollbar w-full md:overflow-x-hidden overflow-x-scroll">
              <TabList className="flex gap-[20px] w-[max-content]">
                {footerTabs2.map((item, idx) => (
                  <Tab
                    className={`${
                      tabIndex2 === idx
                        ? "border-b-[1px] border-neutral-100"
                        : "border-none"
                    } outline-none font-semibold text-[14px] cursor-pointer`}
                  >
                    {item.title}
                  </Tab>
                ))}
              </TabList>
            </div>

            <div className="py-[15px]">
              {footerTabsItems2.map((item) => (
                <TabPanel className="flex flex-wrap gap-[10px] ">
                  {item.map((link) => (
                    <Link to={link.path}>
                      <p className="flex items-center gap-[8px] text-white ">
                        <span className="text-[14px] pt-[5px] font-light">
                          {link.title}
                        </span>{" "}
                        <span> |</span>
                      </p>
                    </Link>
                  ))}
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
