import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="flex w-full flex-col gap-[6px] md:gap-[12px] py-[12px]">
      {label && <p className="text-black text-[16px] font-semibold">{label}</p>}
      <input
        className="py-[12px] bg-transparent outline-none text-black border-b-[2px] border-b-black w-full"
        {...rest}
      />
    </div>
  );
};

export default Input;
