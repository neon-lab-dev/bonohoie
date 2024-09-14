import { ICONS } from "../../assets";
import GiftCard from "../Cart/GiftCard";

const FreebiesUnlocked = ({ setModalType }) => {
  return (
    <div className="bg-[#FDF9E9] rounded-xl relative">
      {/* Background images */}
      <img
        src={ICONS.freebiesBgShape}
        alt=""
        className="absolute top-0 left-0"
      />
      <img
        src={ICONS.freebiesBgShape3}
        alt=""
        className="absolute bottom-0 right-0 rounded-xl"
      />

      <div className="px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ICONS.unlocked} alt="unlock-icon" className="size-8" />
            <h1
              className="text-[#1C1D4F] font-semibold leading-normal"
              style={{ fontSize: "clamp(8px, 3vw, 20px)" }}
            >
              Freebies Unlocked
            </h1>
          </div>

          <button
            onClick={() => setModalType("chooseGift")}
            className="  z-10 bg-white border border-[#00000033] rounded-xl px-3 py-2 flex items-center gap-3 justify-center w-fit"
          >
            <img
              src={ICONS.gift}
              alt="gift-icon"
              className="size-4 sm:size-6"
            />
            <p
              style={{ fontSize: "clamp(8px, 2vw, 16px)" }}
              className="text-[#262626] font-medium leading-6"
            >
              Choose Gift
            </p>
          </button>
        </div>

        <p
          style={{ fontSize: "clamp(8px, 2vw, 14px)" }}
          className="text-[#262626] font-medium leading-none sm:leading-6 mt-2 max-w-[342px]"
        >
          Unlock Freebies as you keep purchasing our beautiful items for your
          young ones
        </p>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-[10px]">
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        </div>
      </div>
    </div>
  );
};

export default FreebiesUnlocked;
