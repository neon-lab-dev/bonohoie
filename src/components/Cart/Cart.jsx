import { ICONS } from "../../assets";
import FreebiesUnlocked from "../FreebiesUnlocked/FreebiesUnlocked";
import CartItemCard from "./CartItemCard";


const Cart = ({setModalType}) => {
    return (
        <div className="mt-6">
            <div className="flex flex-col">
            <CartItemCard/>
            <CartItemCard/>
            </div>

           <div className="px-8">
           <FreebiesUnlocked
           setModalType={setModalType}
           />

            <hr  className="border-[2px] mt-4 border-[#262626]"/>
            {/* Subtotal */}
           <div className="flex items-center justify-between mt-8">
            <div>
            <h1 style={{ fontSize: "clamp(8px, 3vw, 20px)" }} className="font-semibold text-[#262626] leading-normal">Subtotal</h1>
            <p style={{ fontSize: "clamp(8px, 2vw, 14px)" }} className="font-medium leading-6 text-[#454545]">Tax included. Shipping calculated at checkout</p>
            </div>
            <h1 className="text-sm sm:text-[32px] font-semibold leading-none sm;leading-[44px] text-[#262626]">Rs. 8000</h1>
           </div>

           {/* Checkout button */}
           <button className="flex items-center justify-between text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-xs font-semibold h-14 w-full mt-7">
                Checkout
                <img src={ICONS.cartIcon} alt="funel-icon" className="size-5" />
              </button>
           </div>
        </div>
    );
};

export default Cart;