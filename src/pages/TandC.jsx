import React from "react";
import { Footer } from "../components/Footer";
import { IMAGES } from "../assets";
import { MoreQues } from "../components/MoreQues";
import { HappyMoments } from "../components/HappyMoments";
import Header from "../components/Header";

export const TandC = () => {
  return (
    <div>
      <Header/>
    <div className="mx-6 md:mx-10">
      <div className=" relative">
        <p className="absolute text-white text-4xl md:text-5xl top-6 left-6">Term & Conditions</p>
        <p className="absolute text-white top-32 left-6  md:top-6 md:left-[70%] md:w-[25vw] md:text-right ">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
           vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <img
          src={IMAGES.tandc}
          alt="tandc"
          className="w-[96vw] h-[400px] m-auto rounded-3xl object-cover "
        />
        <img
          src={IMAGES.bonhomie}
          alt="bonhomie"
          className="w-[100vw] xl:h-[220px] m-auto rounded-3xl object-cover absolute bottom-0"
        />
      </div>
      <div className="flex justify-between m-4 ">
        <p className="text-[#391811] font-semibold ">2024</p>
        <p className="text-[#391811] font-semibold " >PREMIUM KIDS WEAR</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-[65vw] md:pr-8 mb-16">
          <p className="text-3xl md:text-[40px] md:leading-[48px] font-semibold ">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <p className="text-lg text-[#454545] mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg text-[#454545] mt-5  ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>

          <p className="text-lg md:text-3xl font-semibold mt-5">1. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className=" md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold mt-5">2. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold mt-5">3. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold mt-5">4. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>

        </div>
        <div className="md:w-[30vw] w-full mb-5">
          <p className="text-3xl mb-3 font-semibold">Table of contents</p>
          <ol type="1" className="list-decimal ml-4 ">
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className='underline block md:inline w-[90vw] '>Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3 ">
              <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw]  ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3"> <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor. </a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg mb-3">
            <a href="" className="underline block md:inline w-[90vw] ">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
          </ol>
        </div>
      </div>

      <MoreQues/>
    </div>
    <HappyMoments/>
    <Footer/>
    </div>
  );
};
