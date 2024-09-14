import { ICONS } from "../../assets";
import { useGetAllFreebiesQuery } from "../../redux/Features/Freebies/freebiesApi";
import FreebiesCardLoader from "../Loaders/FreebiesCardLoader";
import FreebiesCard from "./FreebiesCard";

const ChooseGift = () => {
  const {data , isLoading:isFreebiesLoading} = useGetAllFreebiesQuery();
  return (
    <div className="py-6">
      <div className="bg-[#FDF9E9] relative px-8 py-5 border-t border-[#E7E7E7]">
        {/* Your Orders modal */}

        {/* Background images */}
        <img
          src={ICONS.freebiesBgShape4}
          alt=""
          className="absolute top-0 left-0"
        />

        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={ICONS.unlocked} alt="unlock-icon" className="size-8" />
              <h1
                className="text-[#1C1D4F] font-semibold leading-normal"
                style={{ fontSize: "clamp(8px, 3vw, 20px)" }}
              >
                Unlocked Freebies
              </h1>
            </div>
          </div>

          <p
            style={{ fontSize: "clamp(8px, 2vw, 14px)" }}
            className="text-[#262626] font-medium leading-none sm:leading-6 mt-2"
          >
            You can select any two of the freebies that have been unlocked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-7">
          {
            isFreebiesLoading ? 
            [1,2,3].map((_,index) => 
              <FreebiesCardLoader key={index}/>
            )
            :
            data?.freebies?.map(freebie => 
              <FreebiesCard key={freebie?._id} freebie={freebie} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseGift;
