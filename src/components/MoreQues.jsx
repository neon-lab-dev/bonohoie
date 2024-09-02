import React from 'react'
import { IMAGES } from '../assets'

export const MoreQues = () => {
  return (
    <div className="bg-[#F82456] rounded-2xl flex flex-col justify-between relative md:h-[220px] md:flex-row md:mx-7  ">
        <div className="flex flex-col justify-center ml-7">
          <p className="text-5xl text-white">Got more questions ?</p>
          <p className="text-white text-lg">Forem ipsum dolor sit amet, consectetur elit. Nunc vulputate libero et velit</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:mr-7 mx-5">
          <div className="flex flex-col rounded-xl bg-white/10 justify-around px-5 items-start my-4 h-[190px] ">
            <img src={IMAGES.email_white} alt="email" className="w-7 h-7" />
            <p className="text-white text-lg ">contactus@bonhomie.com</p>
          </div>
          <div className="flex flex-col rounded-xl bg-white/10 justify-around px-5 items-start my-4 h-[190px] ">
            <img src={IMAGES.call_white} alt="call" className="w-7 h-7" />
            <p className="text-white text-xl">+91 96476 75788</p>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0">
          <img src={IMAGES.got_ques_bg} alt="got_ques_bg" />
        </div>
      </div>
  )
}
