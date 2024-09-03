import React from 'react'
import { IMAGES } from '../assets'

export const Footer = () => {
  return (
    <div className='bg-[#4B64E6] h-[900px] md:h-[700px] relative overflow-x-hidden'>

            <div className='md:ml-10 md:mt-16 ml-8 mt-10 w-fit absolute left-0 top-0'>
                <div className='flex mb-10'><img src={IMAGES.b} /> <img src={IMAGES.heart_blue} /> <img src={IMAGES.homie} /> </div>
                <p className='text-white text-base w-full md:w-[30vw] md:mb-5'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu </p>
                <div>
                    <div className='flex '><img src={IMAGES.email} className='w-7 h-7 mr-5' /> <p className='text-white'>contactus@bonhomie.com</p></div>
                    <div className='flex'><img src={IMAGES.call} className='w-7 h-7 mr-5 ' /> <p className='text-white'>+91 96476 75788</p></div>
                </div>
            </div>

            <div className='hidden absolute md:grid grid-cols-3 w-[400px] right-0 xl:right-0 top-0 xl:ml-10 md:mt-16 xl:w-fit xl:gap-10'>
                
                    <ul className='text-white'>
                        <li className='mb-1'>Home </li> 
                        <li className='mb-1'>Bestsellers</li> 
                        <li className='mb-1'>About Us</li> 
                        <li className='mb-1'>FAQs</li> 
                        <li className='mb-1'>Terms and Conditions</li> 
                        <li className='mb-1'>Privacy Policy</li>
                    </ul>
                    <ul className='text-white'>
                        <li className='mb-1'>Tshirts </li> 
                        <li className='mb-1'>Pants</li> 
                        <li className='mb-1'>Co-ord sets</li> 
                        <li className='mb-1'>Hats</li> 
                        <li className='mb-1'>Glasses</li>
                    </ul>
                    <ul className='text-white'>
                        <li className='mb-1'>Infants </li> 
                        <li className='mb-1'>03-05 Y</li> 
                        <li className='mb-1'>06-07 Y</li> 
                        <li className='mb-1'>08-10 Y</li> 
                        <li className='mb-1'>11-12 Y</li>
                    </ul>
            </div>
            <div className=' absolute top-1/3 md:hidden'>
                    <ul className='text-white flex flex-wrap gap-5'>
                        <li className='mb-1'>Home </li> 
                        <li className='mb-1'>Bestsellers</li> 
                        <li className='mb-1'>About Us</li> 
                        <li className='mb-1'>FAQs</li> 
                        <li className='mb-1'>Terms and Conditions</li> 
                        <li className='mb-1'>Privacy Policy</li>
                    </ul>
                    <ul className='text-white flex flex-wrap gap-5'>
                        <li className='mb-1'>Tshirts </li> 
                        <li className='mb-1'>Pants</li> 
                        <li className='mb-1'>Co-ord sets</li> 
                        <li className='mb-1'>Hats</li> 
                        <li className='mb-1'>Glasses</li>
                    </ul>
                    <ul className='text-white flex flex-wrap gap-5'>
                        <li className='mb-1'>Infants </li> 
                        <li className='mb-1'>03-05 Y</li> 
                        <li className='mb-1'>06-07 Y</li> 
                        <li className='mb-1'>08-10 Y</li> 
                        <li className='mb-1'>11-12 Y</li>
                    </ul>
            </div>
                
            <img src={IMAGES.spreading_happiness_blue}  className='hidden md:block absolute bottom-0 left-0  w-full ' />
            <img src={IMAGES.spreading_happiness}  className='hidden md:block absolute bottom-0 left-0  w-full ' />
            <img src={IMAGES.spreading_happiness_small}  className=' md:hidden absolute bottom-0 left-0  w-full ' />
            <img src={IMAGES.spreading_happiness_white_small}  className=' md:hidden absolute bottom-5 left-0  w-full ' />
            <img src={IMAGES.footer_image} alt='footer' className='absolute bottom-0 left-0 sm:bottom-0  sm:left-32 md:left-1/4 lg:left-1/3 object-contain xl:h-[600px] h-[500px]  grayscale' />
            <div className='bg-[#2D33C8] absolute bottom-0 w-[100vw]'>
                <img src={IMAGES.footer_design} alt='footer' className=' h-[50px] sm:h-[30px] w-full' />
            </div>
        </div>
  )
}
