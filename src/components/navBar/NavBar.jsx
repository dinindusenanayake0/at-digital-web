import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="w-full bg-primary px-[60px] py-[15px]">
        <div className="flex flex-row items-center justify-between h-16">
          <div className="flex grow">
            <div className="flex-shrink-0">
              <a href="#" className="text-white ">
                <img src="../src/assets/logo.svg" alt="Logo" />
              </a>
            </div>
          </div>
          <div className=" md:block sm:hidden">
            <div className="ml-10 flex items-baseline space-x-4 text-white font-inter-medium text-[14px] ">
              <a href="#">SERVICES</a>
              <a href="#">ABOUT US</a>
              <a href="#">CONTACT US</a>
              <a href="#">CAREERES</a>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-5xl text-white transition duration-150 ease-in-out rounded-md xl:hidden lg:hidden md:hidden hover:text-gray-500"
            >
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden lg:hidden xl:hidden ">
          <div className="px-2 pt-2 pb-3 text-black sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
            >
              HOME
            </a>
            <a
              href="#"
              className="block px-3 py-2 mt-1 text-base font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block px-3 py-2 mt-1 text-base font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="block px-3 py-2 mt-1 text-base font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="block px-3 py-2 mt-1 text-base font-medium rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              CAREERS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// import React, { useEffect, useState } from 'react'
// import logo from '../assets/logo.png'
// import { FaBars, FaXmark } from 'react-icons/fa6';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     //set toggle menu
//     const toggleMenu = () => {
//         setIsMenuOpen(true);
//     }
// useEffect(() => {
//     const handleScroll = () => {
//         if(scrollY > 30){
//             setIsSticky(true);
//         }
//         // else{
