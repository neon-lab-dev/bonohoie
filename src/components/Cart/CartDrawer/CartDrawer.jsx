import { ICONS } from "../../../assets";
import Cart from "../Cart";


const CartDrawer = ({openDrawer, toggleCartExpand}) => {
    return (
        <div className="relative z-50">
      {/* Dark Overlay */}
      {openDrawer && (
        <div
          onClick={toggleCartExpand}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      {/* Filter Dropdown */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] z-50 font-Montserrat transition-all duration-300 ease-in-out">
        <div
          className={`bg-white flex flex-col justify-between rounded-t-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            openDrawer ? "h-[460px] overflow-y-auto" : "h-0"
          }`}
          style={{ opacity: openDrawer ? 1 : 0 }}
        >
          <div className="px-4 py-3">
            {/* Header */}
           <div className="flex items-center justify-between  border-b border-[#E7E7E7] pb-3">
           <p
              className="text-[#262626] text-[28px] leading-[44px] font-medium"
            >
              Cart
            </p>
            <img onClick={toggleCartExpand} src={ICONS.cross} alt="cross-icon" className="size-5 cursor-pointer" />
           </div>

            {/* Dropdown Content */}
            {openDrawer && (
              <div className="overflow-y-auto">
                <Cart/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default CartDrawer;