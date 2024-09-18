import { IMAGES } from "../../assets";


const BestDeals = () => {
    return (
        <div className="mt-7 md:mt-10 flex flex-col md:flex-row gap-5">


          <div className="h-[248px] lg:h-[520px] w-full max-w-[398px] md:max-w-[354px] overflow-hidden rounded-3xl mb-4 relative">
            <img
              src={IMAGES.boys1}
              alt="child1"
              className="h-[248px] w-full lg:h-full object-cover brightness-50"
            />
            <div className="flex flex-row md:flex-col absolute bottom-10 justify-between px-6 w-full">
              <div>
                <p className="text-white text-4xl">Boys</p>
                <p className="text-white text-xl">03-08 yrs</p>
              </div>
              <button className="rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5 w-[140px] justify-center items-center">
                Shop now
                <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
              </button>
            </div>
          </div>


          <div className="h-full md:h-[500px] lg:h-[570px]">
            <div className="bg-[#F82456] h-[252px] w-full max-w-[398px] md:max-w-[354px] overflow-hidden rounded-3xl mb-4 relative">
            <img src={IMAGES.best_deals} alt="best" className=" absolute bottom-0 right-0" />
              <p className="text-white lg:text-xl m-6 mt-9">
                Find the <strong className="italic">best deals</strong> on
                comfortable child co-ord sets for your little ones.
              </p>
              <button className="border-white border-2 rounded-xl py-2 lg:p-4 text-white flex m-6 w-[140px] justify-center items-center">
                Shop now
                <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
              </button>
            </div>


            <div className="h-[248px] overflow-hidden rounded-3xl mb-4 relative">
              <img
                src={IMAGES.infant}
                alt="child1"
                className="h-full w-full brightness-50"
              />
              <div className="absolute bottom-10 flex flex-row md:flex-col justify-between px-6 w-full">
                <div>
                  <p className="text-white text-4xl">Infants</p>
                  <p className="text-white text-xl">00-02 yrs</p>
                </div>
                <button className="rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5 w-[140px] justify-center items-center">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
          </div>

          <div className="h-[248px] md:h-[500px] lg:h-[520px] w-full max-w-[580px] overflow-hidden rounded-3xl mb-4 relative">
            <img
              src={IMAGES.girls1}
              alt="child1"
              className="h-[248px] lg:h-full object-cover w-full brightness-50"
            />
            <div className="flex absolute bottom-10 justify-between px-6 w-full">
              <div>
                <p className="text-white text-4xl">Girls</p>
                <p className="text-white text-xl">03-08 yrs</p>
              </div>
              <button className="rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5 w-[140px] justify-center items-center">
                Shop now
                <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
              </button>
            </div>
          </div>
        </div>
    );
};

export default BestDeals;