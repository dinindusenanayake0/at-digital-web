import React from "react";
import { Button1 } from "../../components/button/Button";

function HeroSection() {
  return (
    <>
      {/* Hero Section Image */}
      <div>
        <img
          src="../src/assets/images/header image.png"
          alt="Header section image"
          className="relative w-full"
        />
      </div>

      {/* Hero Section Card  */}
      <div className="bg-gradient-to-r from-analogous-color-2 to-dark-color w-[653px] sm:w-full md:w-full md:ml-0 sm:ml-0 sm:relative sm:h-auto md:h-auto md:relative  flex flex-col gap-5 h-[306px] lg:top-[450px] xl:top-[620px] ml-14 px-[40px] pt-[24px] pb-[32px] absolute ">
        <h1 className="font-inter-bold text-white text-[48px] sm:text-[33px] font-bold leading-[100%] tracking-[-2%]">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <Button1 text={"GET FREE CONSULTATION"} />
      </div>
    </>
  );
}

export default HeroSection;
