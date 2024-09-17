import React from 'react'
import { IMAGES } from '../assets'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-[#4B64E6] h-[1000px] md:h-[750px] relative overflow-x-hidden mt-10">
      <div className="h-5 bg-[#2D33C8] "></div>
      <div className="md:ml-10 md:mt-20 ml-5 mt-10 w-fit absolute left-0 top-0">
        <div className="flex mb-10">
          <img src={IMAGES.b} /> <img src={IMAGES.heart_blue} />{" "}
          <img src={IMAGES.homie} />{" "}
        </div>
        <p className="text-white text-[12px] sm:text-base w-full md:w-[30vw] md:mb-5 ">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu{" "}
        </p>
        <div>
          <div className="flex my-4">
            <img src={IMAGES.email} className="w-7 h-7 mr-5 " />{" "}
            <p className="text-white text-[12px] sm:text-base">
              contactus@bonhomie.com
            </p>
          </div>
          <div className="flex">
            <img src={IMAGES.call} className="w-7 h-7 mr-5 " />{" "}
            <p className="text-white text-[12px] sm:text-base">
              +91 96476 75788
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[380px] left-5 md:bottom-40 md:left-10">
        <p className="text-white text-[12px] md:text-lg w-40 md:w-full ">
          BONHOMIE GARMENTS PVT. LTD
        </p>
      </div>
      <div className="absolute bottom-[400px] right-5 md:bottom-40 md:right-10 flex justify-between">
        <img src={IMAGES.copywright} className="w-5 h-5 mr-2" />
        <p className="text-white  text-[12px] md:text-lg ">2024 RESERVED</p>
      </div>

      {/* for larger devices */}
      <div className='md:flex absolute right-14 mt-14 hidden'>
            <p className="text-[#9CB3F4] text-[14px] sm:text-base mb-2 mt-3">Shop by Category</p>
            <p className="text-[#9CB3F4] text-[14px] sm:text-base mb-2 mt-3 ml-9">Shop by Age</p>
      </div>
      <div className='hidden absolute md:grid grid-cols-3 w-[510px] right-0  top-0  md:mt-32  gap-5 z-20'>
        <ul className="text-white text-sm">
          <li className="mb-3 ">
            <a href="./">Home</a>
          </li>
          <li className="mb-3 ">
            <a href="./">Bestsellers</a>
          </li>
          <li className="mb-3 ">
            <a href="./about-us">About Us</a>
          </li>
          <li className="mb-3 ">
            <a href="./faq">FAQs</a>{" "}
          </li>
          <li className="mb-3 ">
            <a href="/terms-condition">Terms and Conditions</a>
          </li>
          <li className="mb-3 ">
            <a href="./">Privacy Policy</a>
          </li>
        </ul>
        
          <ul className="text-white text-sm">
            <li className="mb-3 ">Tshirts </li>
            <li className="mb-3 ">Pants</li>
            <li className="mb-3 ">Co-ord sets</li>
            <li className="mb-3">Hats</li>
            <li className="mb-3">Glasses</li>
          </ul>

          
          <ul className="text-white text-sm">
            <li className="mb-3">Infants </li>
            <li className="mb-3">03-05 Y</li>
            <li className="mb-3">06-07 Y</li>
            <li className="mb-3">08-10 Y</li>
            <li className="mb-3">11-12 Y</li>
          </ul>
      </div>
      {/* for smaller devices */}
      <div className=" absolute top-[30%] md:hidden text-[14px] sm:text-base ml-5">
        <ul className="text-white flex flex-wrap gap-4">
          <li className="mb-1">
            <a href="./">Home</a>
          </li>
          <li className="mb-1"> Bestsellers</li>
          <li className="mb-1">
            <a href="./aboutus">About Us</a>
          </li>
          <li className="mb-1">
            <a href="./faq">FAQs</a>{" "}
          </li>
          <li className="mb-1">
            <a href="./tandc">Terms and Conditions</a>
          </li>
          <li className="mb-1">Privacy Policy</li>
        </ul>
        <p className="text-[#9CB3F4] text-[14px] sm:text-base mb-2 mt-3">
          Shop by Category
        </p>
        <ul className="text-white flex flex-wrap gap-4">
          <li className="mb-1">Tshirts </li>
          <li className="mb-1">Pants</li>
          <li className="mb-1">Co-ord sets</li>
          <li className="mb-1">Hats</li>
          <li className="mb-1">Glasses</li>
        </ul>
        <p className="text-[#9CB3F4] text-[14px] sm:text-base mb-2 mt-3">
          Shop by Age
        </p>
        <ul className="text-white flex flex-wrap gap-4">
          <li className="mb-1">Infants </li>
          <li className="mb-1">03-05 Y</li>
          <li className="mb-1">06-07 Y</li>
          <li className="mb-1">08-10 Y</li>
          <li className="mb-1">11-12 Y</li>
        </ul>
      </div>

      <img
        src={IMAGES.spreading_happiness_blue}
        className="hidden md:block absolute bottom-0 left-0  w-full "
      />
      <img
        src={IMAGES.spreading_happiness}
        className="hidden md:block absolute bottom-0 left-0  w-full "
      />
      <img
        src={IMAGES.spreading_happiness_small}
        className=" md:hidden absolute bottom-0 left-0  w-full "
      />
      <img
        src={IMAGES.spreading_happiness_white_small}
        className=" md:hidden absolute bottom-5 left-0  w-full "
      />
      <img
        src={IMAGES.footer_image}
        alt="footer"
        className="absolute bottom-0 left-0 sm:bottom-0  sm:left-32 md:left-1/4 lg:left-1/3 object-contain xl:h-[600px] h-[500px]  grayscale"
      />
      <div className="bg-[#2D33C8] absolute bottom-0 w-[100vw]">
        <img
          src={IMAGES.footer_design}
          alt="footer"
          className=" h-[50px] sm:h-[30px] w-full"
        />
      </div>
    </div>
  );
}
