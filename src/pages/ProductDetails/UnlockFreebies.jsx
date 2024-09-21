import { useDispatch } from "react-redux";
import { ICONS } from "../../assets";
import { setModalType, setOpenModal } from "../../redux/Features/Modal/ModalSlice";

const UnlockFreebies = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#FDF9E9] rounded-xl h-[188px] relative  mt-6">
      {/* Background images */}
      <img
        src={ICONS.freebiesBgShape}
        alt=""
        className="absolute top-0 left-0"
      />
      <img
        src={ICONS.freebiesBgShape2}
        alt=""
        className="absolute bottom-0 right-0 rounded-xl w-1/2 md:w-auto"
      />

      <div className="px-4 py-5">
        <div className="flex items-center gap-2">
          <img src={ICONS.locked} alt="unlock-icon" className="size-8" />
          <h1 className="text-[#1C1D4F] text-xl font-semibold leading-normal">
            Unlock Freebies
          </h1>
        </div>

        <p className="text-[#262626] text-sm font-medium leading-6 mt-2">
          Unlock Freebies as you keep purchasing our beautiful items for your
          young ones
        </p>

        <button
        onClick={() => {
          setModalType(dispatch(setModalType("chooseGift")));
              setOpenModal(dispatch(setOpenModal(true)));
        }}
        className="bg-white border border-[#00000033] rounded-xl px-3 py-2 flex items-center gap-3 justify-center w-fit mt-5">
          <img src={ICONS.gift} alt="gift-icon" className="size-6" />
          <p className="text-[#262626] font-medium leading-6">Know More</p>
        </button>
      </div>
    </div>
  );
};

export default UnlockFreebies;
