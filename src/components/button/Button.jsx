import React from "react";

export const Button1 = ({ text }) => {
  return (
    <>
      <button className="text-left text-white w-[220px] h-[38px] bg-secondary px-[20px] py-[12px] font-bold tracking-[-2%] leading-[14px] font-inter-bold text-[14px] rounded-[4px]">
        {text}
      </button>
    </>
  );
};

export const Button2 = ({ text }) => {
  return (
    <>
      <button className="text-left text-white w-[132px] h-[38px] bg-secondary px-[20px] py-[12px] font-bold tracking-[-2%] leading-[14px] font-inter-bold text-[14px] rounded-[4px]">
        {text}
      </button>
    </>
  );
};
