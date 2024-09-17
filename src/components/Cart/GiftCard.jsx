import { ICONS } from "../../assets";


const GiftCard = () => {
    return (
            <div className="bg-[#FAE18E] rounded-lg border border-[#FCF1C5] font-Montserrat flex justify-between w-[154px] md:w-[164px] p-2">
            <div className="flex gap-2">
            <div className="bg-[#FCF1C5] size-10 rounded-lg"></div>
            <h1 className="text-xs sm:text-sm text-[#262626] font-medium leading-5">Black Child Hat</h1>
            </div>

                <img src={ICONS.cross} alt="cross-icon" className="size-5 cursor-pointer" />
        </div>
    );
};

export default GiftCard;