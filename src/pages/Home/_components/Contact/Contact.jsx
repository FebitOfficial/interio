import React, { useContext } from "react";
import Input from "../../../../components/Input/Input";
import { HomeContext } from "../../../../context/HomeContext/HomeContext";

const Contact = ({ position, zIndex }) => {
  const { showContact } = useContext(HomeContext);
  return (
    <div
      style={{ position, zIndex: zIndex || "-1" }}
      className="bg-[inherit] overflow-y-scroll hide-scrollbar max-h-[90vh] bottom-[0] left-[50%] translate-x-[-50%] z-[-1] w-[100%] lg:w-[95%] px-[24px] pb-[18px] m-auto text-white"
    >
      <div>
        <p className="text-textPink text-size-contact font-bold ml-[-3px] py-[24px]">
          Get in touch
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:gap-[82px]">
        <Input placeholder="Write Your Name" label="Name *" required />
        <Input placeholder="Write Your Email" label="Email *" required />
      </div>
      <div className="flex items-end flex-col lg:flex-row  lg:gap-[82px]">
        <Input placeholder="Your Budget" label="Budget" />
        <div className="py-[12px] w-full flex flex-col gap-[6px] md:gap-[12px]">
          <label className="text-black text-[16px] font-semibold">
            About Your Project
          </label>
          <textarea
            rows={5}
            className="w-full border-[2px] p-[12px] text-black border-neutral-900 rounded-md"
            placeholder="Project Info"
            label="About Your Project"
          />
        </div>
      </div>
      <div className="w-full">
        <button className="bg-black w-full rounded-md py-[16px] md:py-[26px] mt-[24px] hover:bg-bgPink transition-all ease-in duration-300 font-bold text-white text-[32px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
