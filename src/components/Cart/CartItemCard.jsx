import { ICONS } from "../../assets";

const CartItemCard = ({ item, onIncrement, onDecrement, onDelete }) => {
  const price = item?.basePrice;
  const title = item?.name;
  const truncatedTitle = title?.length > 18 ? `${title.slice(0, 18)}...` : title;

  return (
    <div className="bg-white w-full pb-6 font-Montserrat">
      <div className="border-b border-[#E7E7E7] flex items-center justify-between pb-6">
        <div className="flex gap-8 w-full items-center">
          <img src={item?.image} alt="product-image" className="w-[40px] sm:w-[80px]" />


          <div className="w-full">
          <div className="flex items-center justify-between w-full">
              {/* Product title */}
            <h1 className="text-sm md:text-lg font-medium leading-normal sm:leading-8 text-[#262626] capitalize">
              {truncatedTitle}
            </h1>

            {/* Quantity increase, decrease, and remove btn */}
        <div className="flex gap-[10px]">
          {/* Quantity update */}
          <div className="px-3 py-2 bg-[#F6F6F6] w-[88px] flex items-center justify-center gap-3 rounded-lg">
            <img
              src={ICONS.minus}
              alt="minus-icon"
              className="cursor-pointer size-4"
              onClick={onDecrement}
            />
            <p className="text-sm font-medium leading-6 text-[#262626]">
              {item?.quantity}
            </p>
            <img
              src={ICONS.plus}
              alt="plus-icon"
              className="cursor-pointer size-4"
              onClick={onIncrement}
            />
          </div>

          {/* Delete button */}
          <div onClick={onDelete} className="px-3 py-2 bg-[#FFF1F3] size-10 flex items-center justify-center rounded-lg cursor-pointer">
            <img src={ICONS.deleteIcon} alt="delete-icon" className="size-5" />
          </div>
        </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm md:text-lg font-semibold leading-6 md:leading-8 text-[#333]">
                Rs. {price * item.quantity}
              </p>
              <div className="text-sm font-medium leading-6 text-[#6D6D6D] flex items-center gap-2">
                <p>X</p>
                <p>{item?.quantity}</p>
              </div>
            </div>
            </div>
            


        </div>

        

      </div>
    </div>
  );
};

export default CartItemCard;
