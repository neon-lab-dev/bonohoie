import { ICONS, IMAGES } from "../../assets";

const OrderCard = () => {
    return (
        <div className="p-3 bg-[#F6F6F6] rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img src={IMAGES.productImg} alt="" />

            <div>
                <h1 className="text-base font-semibold leading-6 text-[#262626]">The Ray of joy-white tees...</h1>
                <p className="text-sm font-normal leading-6 text-[#6D6D6D]">Unisex winter wear for kids...</p>
                <p className="text-sm font-medium leading-6 text-[#454545]">Size : M</p>
            </div>
        </div>
        <img src={ICONS.rightArrow} alt="right-arrow" className="cursor-pointer size-4" />
        </div>
    );
};

export default OrderCard;