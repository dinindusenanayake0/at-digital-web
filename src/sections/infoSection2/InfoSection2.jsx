import React from "react";
import { Button2 } from "../../components/button/Button";

function InfoSection2() {
  return (
    <div className="container flex flex-row gap-5 md:mx-auto lg:mx-auto xl:mx-auto  my-20 sm:flex-col sm:text-center md:p-10 mx-auto px-10 items-center justify-center">
      <div className="flex flex-col gap-5 sm:items-center md:pl-12">
        <h3 className="font-poppins-semibold text-primary text-[24px] font-semibold">
          Digital Strategy Consulting
        </h3>
        <p className="w-[32rem] md:w-[25rem] sm:w-[21rem] font-inter-regular font-[16px] ">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <Button2 text={"LEARN MORE"} />
      </div>
      <img src="src\assets\search.svg" className="w-[346px] h-[346px]" />
    </div>
  );
}

export default InfoSection2;