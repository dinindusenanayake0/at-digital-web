import React from "react";
import { Button2 } from "../../components/button/Button";

function InfoSection1() {
  return (
    <div className="container flex flex-row gap-5 my-20  justify-center mx-auto px-10 items-center md:mx-auto sm:flex-col sm:text-center lg:mx-auto xl:mx-auto  ">
      <img src="src\assets\web.svg" className="w-[346px] h-[346px]" />
      <div className="flex flex-col gap-5 sm:items-center md:pr-12">
        <h3 className="font-poppins-semibold text-primary text-[24px] font-semibold">
          Web & Mobile App Development
        </h3>
        <p className="w-[32rem] md:w-[25rem] sm:w-[21rem] font-inter-regular font-[16px]">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <Button2 text={"LEARN MORE"} />
      </div>
    </div>
  );
}

export default InfoSection1;
