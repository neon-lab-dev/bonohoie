import React from 'react'
import { IMAGES } from '../assets'

export const HappyMoments = () => {
  return (
    <div className='bg-[#F0F3FE] mt-10'>
            <div className=' md:w-[500px] m-auto py-5'>
                <p className='text-[#1C1D4F] font-semibold text-2xl md:text-5xl text-center '>Make us a part of your happy moments</p>
                <p className='text-[#454545] text-sm '>Post your happy moments and tag us on <strong className='text-[#FF6D8B] '> @bonhomie_official</strong></p>
            </div>
            
            <ul className='flex flex-nowrap overflow-x-scroll w-full'>
                <li className='relative m-2 min-w-[250px] '>
                    <img src={IMAGES.moment5} alt='moment1' className='w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl'/>
                    <p className='absolute top-0 left-0 m-5 text-white'>@prakash_123</p>
                </li>
                <li className='relative m-2 min-w-[250px]'>
                    <img src={IMAGES.moment2} alt='moment1' className='w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl'/>
                    <p className='absolute top-0 left-0 m-5 text-white'>@prakash_123</p>
                </li>
                <li className='relative m-2 min-w-[250px]' >
                    <img src={IMAGES.moment1} alt='moment1' className='w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl'/>
                    <p className='absolute top-0 left-0 m-5 text-white'>@prakash_123</p>
                </li>
                <li className='relative m-2 min-w-[250px]'>
                    <img src={IMAGES.moment3} alt='moment1' className='w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl'/>
                    <p className='absolute top-0 left-0 m-5 text-white'>@prakash_123</p>
                </li>
                <li className='relative m-2 min-w-[250px]'>
                    <img src={IMAGES.moment4} alt='moment1' className='w-[250px] md:w-[360px] h-[400px] object-cover rounded-xl'/>
                    <p className='absolute top-0 left-0 m-5 text-white'>@prakash_123</p>
                </li>
            </ul>
        </div>

  )
}
