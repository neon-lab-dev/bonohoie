import React from "react";
import { IMAGES } from "../assets";
import { HappyMoments } from "../components/HappyMoments";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* we are on a mission */}
      <div className="bg-[#FDF9E9] relative  md:p-10 flex flex-col justify-end rounded-2xl mx-6 md:mx-10 ">
        <p className="text-[#EB5C5C] mt-5 ml-4">We are on a mission</p>
        <div className=" ml-4 flex flex-col md:flex-row justify-center md:justify-between items-end mt-5 md:mb-10">
            <p className="text-3xl md:text-5xl md:w-[50vw] font-semibold ">Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            <p className="md:w-[40vw] mt-5">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
        <img
          src={IMAGES.mission_bg}
          alt="mission_bg"
          className="absolute top-0  sm:right-20  object-cover"
        />
        <div className="flex h-[360px] overflow-x-scroll ">
            <img src={IMAGES.moment6} alt="moment6" className="m-2 w-full" />
            <img src={IMAGES.moment3} alt="moment3" className="m-2 rounded-lg w-full" />
            <img src={IMAGES.moment4} alt="moment4" className="m-2 rounded-lg w-full" />

        </div>
      </div>
      <div className="flex justify-between m-4  md:mx-10">
        <p className="text-[#391811] font-semibold ">2024</p>
        <p className="text-[#391811] font-semibold " >PREMIUM KIDS WEAR</p>
      </div>

      <div className="bg-[#FFF1F3] rounded-2xl mx-6 relative h-[520px] md:h-[460px] overflow-hidden mb-10 md:mx-10">
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

      <div className="flex flex-col-reverse lg:flex-row mx-6  md:mx-10">
        <div className="bg-[#F82456] rounded-xl lg:w-[65vw] lg:mr-9 relative">
            
            <img src={IMAGES.star} alt="star" className="absolute top-0 left-0 " />
            <p className="text-white  md:text-2xl p-8">What our founder has to say</p>
            <p className="text-white text-2xl leading-10 md:text-3xl xl:text-5xl md:leading-[60px] md:text-left  p-3 md:p-10 ">Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora</p>
        </div>
        <div className=" relative rounded-xl h-[500px] md:h-[500px] lg:w-[35vw] flex justify-center">
              <p className="text-[#1C1D4F] absolute right-0 italic text-sm sm:text-lg xl:text-xl font-semibold ">CEO- Bonhomie Fashions</p>
            <img src={IMAGES.subtract} alt="subtract" className="absolute top-0 z-0 h-[500px] w-full  md:h-full " />
            <img src={IMAGES.founder} alt="founder" className="h-full object-cover absolute top-0 z-10" />
        </div>
      </div>

      <HappyMoments/>
      <Footer/>

    </div>
  );
};
