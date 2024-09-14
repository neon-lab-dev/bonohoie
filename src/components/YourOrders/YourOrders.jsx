import { ICONS } from "../../assets";
import OrderCard from "./OrderCard";


const YourOrders = () => {
    return (
        <div className="border-t border-[#E7E7E7] mt-[22px] px-8 pt-4">
            <div className="flex gap-2">
                <img src={ICONS.tickCircle} alt="" className="size-5" />
                <div>
                    <h1 className="text-base font-semibold leading-6 text-[#15742D]">Delivered</h1>
                    <p className="text-sm font-medium leading-6 text-[#454545]">on sat, 24 Aug</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
            <OrderCard/>
            </div>
        </div>
    );
};

export default YourOrders;