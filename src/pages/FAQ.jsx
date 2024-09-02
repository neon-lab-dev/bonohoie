import React from 'react'
import { IMAGES } from '../assets'
import { MoreQues } from '../components/MoreQues'

export const FAQ = () => {
  return (
    <div className="mx-6 md:mx-4">
      <div className=" relative">
        <img
          src={IMAGES.faq}
          alt="faq"
          className="w-[96vw] h-[400px] m-auto rounded-3xl object-cover"
        />
        <img
          src={IMAGES.bonhomie}
          alt="bonhomie"
          className="w-full md:h-[220px] m-auto rounded-3xl object-contain  absolute bottom-0"
        />
      </div>

      <div className='flex flex-col md:flex-row justify-between my-10'>
        <p className='text-2xl md:text-5xl md:w-[30vw] md:ml-3'>Answer to all your questions</p>

        <div className='md:w-[40vw] md:mr-3'>
          <p className='mb-5 md:text-lg'>Forem ipsum dolor sit amet, consectetur  elit. Nunc vulputate libero et velit </p>
          <div className='flex md:gap-3'>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2 text-[#888888]'>General</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2 text-[#888888]'>Pricing</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2 text-[#888888]'>Delivery</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2 text-[#888888]'>Return</button>
          </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-3 md:gap-7 md:m-7'>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='bg-[#F6F6F6] rounded-2xl p-5 mb-4'>
          <div className='bg-[#E7E7E7] rounded-2xl w-fit'><img src={IMAGES.search} alt='search' className='p-4' /> </div>
          <p className='text-2xl'>What all do we offer ?</p>
          <p className='text-[#5D5D5D] '>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate 
            libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        

      </div>

      <MoreQues/>
    </div>
  )
}
