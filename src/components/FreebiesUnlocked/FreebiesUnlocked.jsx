import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import GiftCard from "../Cart/GiftCard";
import {
  setDrawerType,
  setOpenDrawer,
} from "../../redux/Features/DrawerSlide/DrawerSlice";
import PropTypes from 'prop-types'

const FreebiesUnlocked = ({ setModalType, openDrawer }) => {
  const dispatch = useDispatch();
  const [freebies, setFreebies] = useState(
    JSON.parse(localStorage.getItem("freebies")) || []
  );

  const updateFreebies = () => {
    const updatedFreebies = JSON.parse(localStorage.getItem("freebies")) || [];
    setFreebies(updatedFreebies);
  };

  // to see the changes immedietly
  useEffect(() => {
    updateFreebies();
  }, []);

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
            <h1 className="text-[#1C1D4F] text-xl font-semibold leading-normal">
              Freebies Unlocked
            </h1>
          </div>
        </div>

        <p className="text-[#262626] text-sm font-medium leading-6 mt-2 max-w-[342px]">
          Unlock Freebies as you keep purchasing our beautiful items for your
          young ones
        </p>

        {freebies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-[10px]">
            {freebies.map((freebie) => (
              <GiftCard
                key={freebie._id}
                freebie={freebie}
                onRemove={updateFreebies}
              />
            ))}
          </div>
        )}

        {/* For larger device modal */}
        <button
          onClick={() => setModalType(dispatch(setModalType("chooseGift")))}
          className="z-10 bg-white border border-[#FAE18E] rounded-xl px-3 py-2 hidden md:flex items-center gap-3 justify-center w-fit mt-5"
        >
          <img src={ICONS.gift} alt="gift-icon" className="size-6" />
          <p className="text-[#262626] font-medium leading-6 text-xl">
            {freebies.length > 0 ? "Change Gift" : "Choose Gift"}
          </p>
        </button>

        {/* For small device drawer */}
        <button
          onClick={() => {
            dispatch(setDrawerType("chooseGift"));
            dispatch(setOpenDrawer(!openDrawer));
          }}
          className="z-10 bg-white border border-[#FAE18E] rounded-xl px-3 py-2 flex items-center gap-3 justify-center w-fit mt-5 md:hidden"
        >
          <img src={ICONS.gift} alt="gift-icon" className="size-6" />
          <p className="text-[#262626] font-medium leading-6 text-xl">
            Choose Gift
          </p>
        </button>
      </div>
    </div>
  );
};

FreebiesUnlocked.propTypes = {
  setModalType: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
};

export default FreebiesUnlocked;
