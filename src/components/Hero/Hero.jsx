import { IMAGES } from "../../assets";


const Hero = () => {
    return (
        <div className="">
          <div className="relative md:opacity-100 md:mx-0">
            <img
              src={IMAGES.hero}
              alt="hero"
              className="h-[550px] md:h-[640px] object-cover md:w-full rounded-2xl brightness-50"
            />
            <img
              src={IMAGES.bonhomie_yellow}
              alt="bonhomie_yellow"
              className="absolute bottom-0 w-full rounded-b-2xl"
            />
            <div className="hidden md:block absolute top-0 left-0 ml-8 mt-6">
              <div className="flex items-center gap-2">
                <img src={IMAGES.star_yellow} alt="star_yellow" className="" />
                <p className="text-white">4.5</p>
              </div>
              <p className="text-white mt-8 w-[200px]">
                Both kids and their happy parents love us
              </p>
            </div>
            <div className="absolute top-1/3 md:top-0 md:right-0 w-full md:w-[400px] mt-8 px-2 justify-center md:justify-start">
              <p className="text-white text-sm text-center font-medium mx-6 md:mx-0">
                Supplying your child with the prettiest, coziest clothes
                possible at the most affordable prices.
              </p>
              <div className="flex justify-center md:justify-end gap-2 mr-0 md:mr-6 mt-9">
                <button className="border border-gray-200 rounded-xl px-3 py-[10px] text-white text-xs sm:text-base w-fit min-w-[140px]">
                  2023 collection
                </button>
                <button className="bg-white bg-opacity-[28%] rounded-xl px-3 py-[10px] text-white flex items-center justify-center gap-[10px] text-xs sm:text-base w-fit min-w-[140px]" >
                  Shop now
                  <img src={IMAGES.arrow_white} className="" />
                </button>
              </div>
            </div>
          </div>
            <div className="flex justify-between mt-6">
              <p className="text-[#391811] font-semibold text-xs sm:text-base">2024</p>
              <p className="text-[#391811] font-semibold text-xs sm:text-base">PREMIUM KIDS WEAR</p>
            </div>
        </div>
    );
};

export default Hero;