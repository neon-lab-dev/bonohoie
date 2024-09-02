import React from "react";
import { Footer } from "../components/Footer";
import { IMAGES } from "../assets";
import { MoreQues } from "../components/MoreQues";

export const TandC = () => {
  return (
    <div className="mx-6 md:mx-4">
      <div className=" relative">
        <img
          src={IMAGES.tandc}
          alt="tandc"
          className="w-[96vw] h-[400px] m-auto rounded-3xl object-cover"
        />
        <img
          src={IMAGES.bonhomie}
          alt="bonhomie"
          className="w-full md:h-[220px] m-auto rounded-3xl object-contain  absolute bottom-0"
        />
      </div>
      <div className="flex justify-between m-4">
        <p>2024</p>
        <p>PREMIUM KIDS WEAR</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-[65vw] md:pr-8 mb-5">
          <p className="text-3xl md:text-5xl">
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

          <p className="text-lg md:text-3xl font-semibold">1. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className=" md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold">2. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold">3. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>
          <p className="text-lg md:text-3xl font-semibold">4. Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="md:text-lg text-[#454545]  mt-5 ">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum e
          </p>

        </div>
        <div className="md:w-[30vw] mb-5">
          <p>Table of contents</p>
          <ol type="1" className="list-decimal ml-4">
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className='underline '>Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
              <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">Corem ipsum dolor.</li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
            <li className="text-[#4F4F4F] text-lg">
            <a href="" className="underline">Corem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </li>
          </ol>
        </div>
      </div>

      <MoreQues/>
    </div>
  );
};
