import React from "react";
import { IMAGES } from "../assets";

export const AboutUs = () => {
  return (
    <div>
      {/* we are on a mission */}
      <div className="bg-[#FDF9E9] relative  p-10 flex flex-col justify-end rounded-2xl mx-6">
        <p className="text-[#EB5C5C] ">We are on a mission</p>
        <div className="flex justify-between items-end">
            <p className="text-5xl w-[50vw]">Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            <p className="w-[40vw]">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <img
          src={IMAGES.mission_bg}
          alt="mission_bg"
          className="absolute top-0 right-0  object-cover"
        />
        <div className="flex h-[360px] overflow-x-scroll">
            <img src={IMAGES.moment6} alt="moment6" className="m-2 " />
            <img src={IMAGES.moment3} alt="moment3" className="m-2 rounded-lg" />
            <img src={IMAGES.moment4} alt="moment4" className="m-2 rounded-lg" />

        </div>
      </div>
        <div className='flex justify-between mx-6 mb-10 mt-5'>
            <p>2024</p>
            <p>PREMIUM KIDS WEAR</p>
        </div>

      <div className="bg-[#FFF1F3] rounded-2xl mx-6 relative h-[520px] md:h-[460px] overflow-hidden mb-10">
        <p className="text-[#4E031D] text-xl text-center p-6 md:p-10  md:leading-10">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
        </p>
        {/* <p className="text-[#fbbfcb] font-black text-[70px] lg:text-[220px] xl:text-[284px] text-center h-fit absolute bottom-0 md:-bottom-24 w-full">about us</p> */}
        <img src={IMAGES.aboutus} alt="aboutus" className="absolute bottom-0 w-full" />
      </div>

      <div className="flex mx-6">
        <div className="bg-[#F82456] rounded-xl md:w-[70vw] mr-9 relative">
            <img src={IMAGES.star} alt="star" className="absolute top-0 left-0 " />
            <p className="text-white text-2xl p-8">What our founder has to say</p>
            <p className="text-white text-3xl md:text-5xl md:leading-[60px] text-left p-10 ">Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora</p>
        </div>
        <div className="bg-[#262626] rounded-xl md:h-[500px] md:w-[30vw] flex justify-center">
            <img src={IMAGES.founder} alt="founder" className="h-full" />
        </div>
      </div>
    </div>
  );
};
