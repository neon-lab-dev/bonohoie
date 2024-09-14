import { IMAGES } from '../assets'
import { MoreQues } from '../components/MoreQues'
import { HappyMoments } from '../components/HappyMoments'
import { Footer } from '../components/Footer'

export const FAQ = () => {
  return (
    <div>
    <div className="mx-6 md:mx-10">
      <div className=" relative">
      <p className="absolute text-white text-4xl md:text-5xl top-6 left-6">FAQs</p>
        <p className="absolute text-white top-24 left-6  md:top-6 md:left-[70%] md:w-[25vw] md:text-right ">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
           vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        <img
          src={IMAGES.faq}
          alt="faq"
          className="w-[96vw] h-[500px] md:h-[400px] m-auto rounded-3xl object-cover "
        />
        <img
          src={IMAGES.bonhomie}
          alt="bonhomie"
          className="w-[100vw] xl:h-[220px] m-auto rounded-3xl object-cover  absolute bottom-0"
        />
      </div>
      <div className="flex justify-between m-4 ">
        <p className="text-[#391811] font-semibold ">2024</p>
        <p className="text-[#391811] font-semibold " >PREMIUM KIDS WEAR</p>
      </div>

      <div className='flex flex-col md:flex-row justify-between my-10'>
        <p className='text-2xl md:text-5xl md:w-[30vw] md:ml-3'>Answer to all your questions</p>

        <div className='md:w-[40vw] md:mr-3'>
          <p className='mb-5 md:text-lg'>Forem ipsum dolor sit amet, consectetur  elit. Nunc vulputate libero et velit </p>
          <div className='flex flex-wrap '>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2  m-1  text-[#888888]'>General</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2  m-1  text-[#888888]'>Pricing</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2  m-1  text-[#888888]'>Delivery</button>
            <button className='rounded-3xl border-[#888888] border-2 px-3 py-2  m-1  text-[#888888]'>Return</button>
          </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-3 md:gap-7 md:m-7 mb-10 md:mb-20'>
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
    <HappyMoments/>
      <Footer/>
    </div>

  )
}
