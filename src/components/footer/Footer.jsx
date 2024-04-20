import React from "react";

function Footer() {
  return (
    <footer className="bg-primary flex flex-col gap-10 py-10 lg:px-10 xl:px-10 sm:p-5 md:p-8 ">
      <div className="flex flex-row lg:flex-row lg:px-12 lg:justify-between xl:gap-[35rem] md:flex-col sm:flex-col ">
        <div className="flex flex-col gap-5 md:pb-10 sm:pb-10">
          <a href="#">
            <img src="src\assets\logo.svg" alt="Company Logo" />
          </a>
          <p className="max-w-[438px] text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results
          </p>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row gap-10 md:flex-col">
          <div className="text-white flex flex-col  gap-3">
            <h3 className="font-inter-semibold">Our Technologies</h3>
            <h5 className="font-inter-medium text-[14px]">React JS</h5>
            <h5 className="font-inter-medium text-[14px]">Gatsby</h5>
            <h5 className="font-inter-medium text-[14px]">Next JS</h5>
            <h5 className="font-inter-medium text-[14px]">Node JS</h5>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h3 className="font-inter-semibold">Our Services</h3>
            <h5 className="font-inter-medium text-[14px]">Social media Marketing</h5>
            <h5 className="font-inter-medium text-[14px]">Web & Mobile App Development</h5>
            <h5 className="font-inter-medium text-[14px]">Data & Analytics</h5>
          </div>
        </div>
      </div>
      <hr className="w-[630px] mx-auto" />
      <div>
        <p className="text-center text-white">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </footer>
  );
}

export default Footer;
