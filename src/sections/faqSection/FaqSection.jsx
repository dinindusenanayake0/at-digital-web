import React from "react";

function FaqSection() {
  return (
    <div className="container flex flex-col gap-5 mx-auto my-20 justify-center items-center md:px-12">
      <h3 className="font-poppins-semibold text-primary text-2xl lg:text-3xl xl:text-4xl text-center">
        Frequently asked questions
      </h3>
      <div className="flex flex-col gap-4 w-full max-w-[846px]">
        <div className="bg-[#FAF8FF] flex flex-col gap-4 lg:gap-6 p-6 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="font-inter-medium text-lg lg:text-xl text-primary">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </p>
            <img
              src="src\assets\plusicon.svg"
              alt="Toggle Icon"
              className="cursor-pointer"
            />
          </div>
          <p className="font-inter-regular text-base lg:text-lg text-text-color-light">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
            ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
            Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>
        <div className="bg-[#FAF8FF] flex flex-col gap-4 lg:gap-6 p-6 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="font-inter-medium text-lg lg:text-xl text-primary">
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            </p>
            <img
              src="src\assets\plusicon.svg"
              alt="Toggle Icon"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="bg-[#FAF8FF] flex flex-col gap-4 lg:gap-6 p-6 rounded-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="font-inter-medium text-lg lg:text-xl text-primary">
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            </p>
            <img
              src="src\assets\plusicon.svg"
              alt="Toggle Icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
