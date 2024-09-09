import { ICONS } from "../../assets";


const FreebiesCard = () => {
    return (
        <div className="z-10 px-3 pt-3 bg-white flex flex-col gap-3 rounded-2xl border border-[#FCF1C5]">
            <div className=" bg-[#FCF6F0] rounded-2xl h-[124px]"></div>

            <button className="px-6 py-[10px] flex items-center justify-between w-full bg-white border border-[#E7E7E7] rounded-xl mb-5">
            Choose
            <img src={ICONS.plus} alt="" className="size-5" />
            </button>
        </div>
    );
};

export default FreebiesCard;