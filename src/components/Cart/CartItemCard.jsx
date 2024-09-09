import { useState } from 'react';
import { ICONS, IMAGES } from "../../assets";

const CartItemCard = () => {
    const [quantity, setQuantity] = useState(2);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const price =2000

    const title = "The Ray of joy-white tees...";
    const truncatedTitle = title.length > 18 ? `${title.slice(0, 18)}...` : title;

    return (
        <div className="bg-white px-8 py-6 w-full">
            <div className="border-b border-[#E7E7E7] flex items-center justify-between pb-6">
                <div className="flex items-center gap-8">
                    <img src={IMAGES.productImg} alt="product-image" className="w-[40px] sm:w-[80px]" />

                    <div>
                        <h1 style={{ fontSize: "clamp(8px, 3vw, 18px)" }} className="font-medium leading-none sm:leading-8 text-[#262626]">
                            {truncatedTitle}
                        </h1>
                        <div className="flex items-center gap-4">
                            <p style={{ fontSize: "clamp(8px, 3vw, 18px)" }} className="font-semibold leading-8 text-[#333]">
                                Rs. {price * quantity}
                            </p>
                            <div style={{ fontSize: "clamp(8px, 3vw, 14px)" }} className="font-medium leading-6 text-[#6D6D6D] flex items-center gap-2">
                                <p className="">X</p>
                                <p className="">{quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[10px]">
                    {/* Quantity update */}
                    <div className="px-1 sm:px-3 py-1 sm:py-2 bg-[#F6F6F6] w-[60px] sm:w-[88px] flex items-center gap-3 rounded-lg">
                        <img 
                            src={ICONS.minus} 
                            alt="minus-icon" 
                            className="cursor-pointer size-2 sm:size-4" 
                            onClick={handleDecrement} 
                        />
                        <p style={{ fontSize: "clamp(8px, 2vw, 14px)" }} className="text-sm font-medium leading-6 text-[#262626]">
                            {quantity}
                        </p>
                        <img 
                            src={ICONS.plus} 
                            alt="plus-icon" 
                            className="cursor-pointer size-2 sm:size-4" 
                            onClick={handleIncrement} 
                        />
                    </div>

                    {/* Delete button */}
                    <div className="px-3 py-2 bg-[#FFF1F3] size-10 flex items-center justify-center rounded-lg cursor-pointer">
                        <img src={ICONS.deleteIcon} alt="delete-icon" className="size-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
