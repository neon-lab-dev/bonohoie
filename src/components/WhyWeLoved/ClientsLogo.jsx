import Marquee from "react-marquee-slider";
import { IMAGES } from "../../assets";

const ClientsLogo = () => {
    return (
        <div className="w-full overflow-hidden mt-10 py-[30px] border-[#E7E7E7] border-dashed border-t-2 border-b-2 lg:border-b-0">
            <Marquee
              velocity={25}
              minScale={0.7}
              resetAfterTries={200}
              scatterRandomly={false}
            >
              <div className="flex justify-center items-center">
                <span className="text-[28px] lg:text-[42px] mx-4 font-medium">
                  Affordable luxury and comfort
                </span>
                <img
                  src={IMAGES.star_pink}
                  alt="icon-1"
                  className="w-14 md:w-[100px]"
                />
              </div>
              <div className="flex justify-center items-center">
                <span className="text-[28px] lg:text-[42px] mx-4 font-medium">Spreading Joy and comfort</span>
                <img
                  src={IMAGES.star_home}
                  alt="icon-2"
                  className="w-14 md:w-[100px]"
                />
              </div>
              
            </Marquee>
          </div>
    );
};

export default ClientsLogo;