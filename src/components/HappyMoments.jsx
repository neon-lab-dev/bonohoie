import React from "react";
import { IMAGES } from "../assets";
import Marquee from "react-marquee-slider";
import moment1 from "../assets/moment1.jpeg";
import moment2 from "../assets/moment2.jpeg";
import moment3 from "../assets/moment3.jpeg";
import moment4 from "../assets/moment4.jpeg";
import moment5 from "../assets/moment5.jpeg";

export const HappyMoments = () => {
  const images = [ moment1, moment2, moment3, moment4, moment5];

  return (
    <div className="bg-[#F0F3FE] mt-10">
      <div className=" md:w-[600px] m-auto py-10 ">
        <p className="text-[#1C1D4F] font-semibold text-2xl md:text-5xl text-center mb-5">
          Make us a part of your happy moments
        </p>
        <p className="text-[#454545] text-sm text-center">
          Post your happy moments and tag us on{" "}
          <strong className="text-[#FF6D8B] "> @bonhomie_official</strong>
        </p>
      </div>

      <Marquee velocity={50} minScale={0.7} resetAfterTries={200}>
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="moments"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl m-3 mb-10"
          />
        ))}
        
      </Marquee>

      {/* <ul className="flex flex-nowrap overflow-x-scroll w-full">
        <li className="relative m-2 min-w-[250px] ">
          <img
            src={IMAGES.moment5}
            alt="moment1"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl"
          />
          <p className="absolute top-0 left-0 m-5 text-white">@prakash_123</p>
        </li>
        <li className="relative m-2 min-w-[250px]">
          <img
            src={IMAGES.moment2}
            alt="moment1"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl"
          />
          <p className="absolute top-0 left-0 m-5 text-white">@prakash_123</p>
        </li>
        <li className="relative m-2 min-w-[250px]">
          <img
            src={IMAGES.moment1}
            alt="moment1"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl"
          />
          <p className="absolute top-0 left-0 m-5 text-white">@prakash_123</p>
        </li>
        <li className="relative m-2 min-w-[250px]">
          <img
            src={IMAGES.moment3}
            alt="moment1"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl"
          />
          <p className="absolute top-0 left-0 m-5 text-white">@prakash_123</p>
        </li>
        <li className="relative m-2 min-w-[250px]">
          <img
            src={IMAGES.moment4}
            alt="moment1"
            className="w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl"
          />
          <p className="absolute top-0 left-0 m-5 text-white">@prakash_123</p>
        </li>
      </ul> */}
    </div>
  );
};
