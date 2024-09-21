import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import FreebiesUnlocked from "../FreebiesUnlocked/FreebiesUnlocked";
import CartItemCard from "./CartItemCard";
import { toast } from 'sonner';
import PropTypes from 'prop-types'

const Cart = ({ setModalType, openDrawer }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  // Handle increment of quantity
  const handleIncrement = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.productId === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Handle decrement of quantity
  const handleDecrement = (itemId) => {
    const updatedItems = cartItems.map(item =>
      item.productId === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Handle delete of an item
  const handleDelete = (itemId, itemName) => {
    const updatedCartItems = cartItems.filter(item => item.productId !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    toast.success(`${itemName} has been removed from cart.`);
  };

  // Calculate subtotal (total price)
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.basePrice * item.quantity, 0);
  };


 

  return (
    <div className="font-Montserrat">
      <div className="">
      <div className="flex flex-col mt-6 md:mt-0">
        {cartItems.length === 0 ? (
          <p className="text-center font-medium leading-6 mb-10">Cart is empty</p>
        ) : (
          cartItems?.map(item => (
            <CartItemCard
              key={item?.productId}
              item={item}
              onIncrement={() => handleIncrement(item.productId)}
              onDecrement={() => handleDecrement(item.productId)}
              onDelete={() => handleDelete(item.productId, item.name)}
            />
          ))
        )}
      </div>

      <div className="">
      {/* toggleChooseGiftDrawer   is for smaller device */}
        <FreebiesUnlocked setModalType={setModalType} openDrawer={openDrawer} />

        <hr className="border-[1.5px] mt-4 border-[#262626]" />
        {/* Subtotal */}
        <div className="flex items-center justify-between mt-8">
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
            <h1 className="text-base md:text-xl font-medium md:font-semibold text-[#262626] leading-6 md:leading-normal">Subtotal</h1>

            <h1 className="text-xl md:text-[32px] font-medium md:font-semibold leading-none md:leading-[44px] text-[#262626]">
            Rs. {getTotalPrice()}
          </h1>
            </div>
            <p className="text-xs md:text-sm font-medium leading-normal md:leading-6 text-[#454545]">
              Tax included. Shipping calculated at checkout
            </p>
          </div>
         
        </div>

        {/* Checkout button */}
        <button className="flex items-center justify-between text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-xs font-semibold h-14 w-full mt-7">
          Checkout
          <img src={ICONS.cartIcon} alt="cart-icon" className="size-5" />
        </button>
      </div>
    </div>
    </div>
  );
};

Cart.propTypes = {
  setModalType: PropTypes.func.isRequired,
  openDrawer: PropTypes.bool.isRequired,
};

export default Cart;
