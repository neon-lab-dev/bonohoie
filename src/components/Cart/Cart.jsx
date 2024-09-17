import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import FreebiesUnlocked from "../FreebiesUnlocked/FreebiesUnlocked";
import CartItemCard from "./CartItemCard";
import { toast } from 'sonner';

const Cart = ({ setModalType }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

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
    <div className="mt-6">
      <div className="flex flex-col">
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

      <div className="px-8">
        <FreebiesUnlocked setModalType={setModalType} />

        <hr className="border-[1.5px] mt-4 border-[#262626]" />
        {/* Subtotal */}
        <div className="flex items-center justify-between mt-8">
          <div>
            <h1 style={{ fontSize: "clamp(8px, 3vw, 20px)" }} className="font-semibold text-[#262626] leading-normal">Subtotal</h1>
            <p style={{ fontSize: "clamp(8px, 2vw, 14px)" }} className="font-medium leading-6 text-[#454545]">
              Tax included. Shipping calculated at checkout
            </p>
          </div>
          <h1 className="text-sm sm:text-[32px] font-semibold leading-none sm:leading-[44px] text-[#262626]">
            Rs. {getTotalPrice()}
          </h1>
        </div>

        {/* Checkout button */}
        <button className="flex items-center justify-between text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-xs font-semibold h-14 w-full mt-7">
          Checkout
          <img src={ICONS.cartIcon} alt="cart-icon" className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
