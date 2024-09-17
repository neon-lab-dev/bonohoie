import { IMAGES } from "../../assets";
import BestDeals from "./BestDeals";
import ClientsLogo from "./ClientsLogo";

const WhyWeLoved = () => {
    return (
        <div className="mt-16 lg:border-dashed border-none lg:border-2 border-[#E7E7E7]">
             {/* py-8 px-5 */}
        <div className="bg-[#F6F6F6] md:bg-white  border-[#E7E7E7] lg:border-dashed border-none lg:border-b-2">
          <div className="flex flex-col md:flex-row"> 
            <div className="lg:border-dashed border-none lg:border-r-2 border-[#E7E7E7] w-[40vw]">
           <div className="lg:border-dashed border-none lg:border-b-2 border-[#E7E7E7] py-0 lg:py-10 pt-10">
           <p className="text-[#333333] font-semibold my-4 text-center">Why are we loved</p>
           </div>
            </div>
            <div className="px-4 md:px-12 pb-12 pt-7 lg:pt-12 flex flex-col gap-7 lg:gap-14">
              <p className="text-[28px] md:text-[44px] font-medium leading-[44px] md:leading-[68px]">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio{" "}
              </p>
              <div className="flex items-center gap-20">
                  <div className="relative flex items-center max-w-[200px]">
                    <div className="size-9 rounded-full border-2 border-white">
                      <img src={IMAGES.ellipse1} alt="" className="size-9 rounded-full" />
                    </div>
                    <div className="size-9 rounded-full border-2 border-white absolute left-6">
                      <img src={IMAGES.ellipse1} alt="" className="size-9 rounded-full" />
                    </div>
                    <div className="size-9 rounded-full border-2 border-white absolute left-12">
                      <img src={IMAGES.ellipse1} alt="" className="size-9 rounded-full" />
                    </div>
                    <div className="size-9 rounded-full border-2 border-white absolute left-16">
                      <img src={IMAGES.ellipse1} alt="" className="size-9 rounded-full" />
                    </div>
                  </div>
                  <p>+200 happy children</p>
                </div>
            </div>
          </div>

        </div>

        {/* for smaller devices */}
        <BestDeals/>

        {/* for medium and higher devices */}
       


        <ClientsLogo/>
      </div>
    );
};

export default WhyWeLoved;