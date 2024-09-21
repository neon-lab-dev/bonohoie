import { IMAGES } from '../assets'

export const MoreQues = () => {
  return (
    <div className="bg-[#F82456] rounded-2xl flex flex-col justify-between items-center relative md:h-[220px] md:flex-row md:mx-7 font-Montserrat py-6 px-8">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-[40px] lg:text-[48px] text-white font-semibold ">Got more questions ?</p>
          <p className="text-white text-lg max-w-[500px]">Forem ipsum dolor sit amet, consectetur elit. Nunc vulputate libero et velit</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col rounded-xl bg-white/10 justify-around p-5 items-start h-[100px] md:h-[190px] md:min-w-[200px] z-10">
            <img src={IMAGES.email_white} alt="email" className="w-7 h-7" />
            <a href="mailto:contactus@bonhomie.com" className="text-white md:text-lg ">contactus@bonhomie.com</a>
          </div>
          <div className="flex flex-col rounded-xl bg-white/10 justify-around p-5 items-start h-[100px] md:h-[190px] md:min-w-[200px] z-10">
            <img src={IMAGES.call_white} alt="call" className="w-7 h-7" />
            <a href='tel:+91 96476 75788' className="text-white md:text-xl">+91 96476 75788</a>
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0">
          <img src={IMAGES.got_ques_bg} alt="got_ques_bg" />
        </div>
      </div>
  )
}
