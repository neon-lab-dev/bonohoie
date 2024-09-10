import { ICONS } from "../../assets";
import ProductImages from "./ProductImages";
import { useState } from "react";
import DetailCard from "../../components/Reusable/DetailCard";
import ImageCarousel from "./ImageCarousel";
import DeliveryOptions from "./DeliveryOptions";
import DeliveryDetails from "./DeliveryDetails";
import UnlockFreebies from "./UnlockFreebies";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "./ProductInfo";
import Modal from "../../components/Reusable/Modal";
import Login from "../../components/Auth/Login/Login";
import Signup from "../../components/Auth/Signup/Signup";
import Profile from "../../components/Auth/Profile/Profile";
import YourOrders from "../../components/YourOrders/YourOrders";
import Cart from "../../components/Cart/Cart";
import ChooseGift from "../../components/ChooseGift/ChooseGift";

const ProductDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("login");

  const [productSize, setProductSize] = useState("2-4Y");
  const sizes = ["2-4Y", "5-7Y", "8-10Y", "11-12Y"];
  console.log(modalType);

  // Breadcrumb menus
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Tees", link: "/tees" },
    { label: "Age Group", link: "/tees/age-group" },
    { label: "Product Name" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto font-Montserrat">
      <div className="flex gap-20">
        <button
          onClick={() => {
            setModalType("cart");
            setOpenModal(true);
          }}
        >
          Cart
        </button>

        <button
          onClick={() => {
            setModalType("orders");
            setOpenModal(true);
          }}
        >
          Orders
        </button>

        <button
          onClick={() => {
            setModalType("chooseGift");
            setOpenModal(true);
          }}
        >
          Choose Gift
        </button>

        <button
          onClick={() => {
            setModalType("login");
            setOpenModal(true);
          }}
        >
          Login
        </button>
      </div>

      {/* Login, signup, profile, change password modal */}
      <Modal
        modalType={modalType}
        setModalType={setModalType}
        openModal1={openModal}
        setOpenModal1={setOpenModal}
        title={
          modalType === "login"
            ? "Login"
            : modalType === "signup"
            ? "Signup"
            : modalType === "profile"
            ? "Profile"
            : modalType === "orders"
            ? "Your Orders"
            : modalType === "cart"
            ? "Cart"
            : modalType === "chooseGift"
            ? "Choose Gift"
            : ""
        }
        classNames={`${
          modalType === "cart" || modalType === "chooseGift"
            ? "w-[660px]"
            : "w-[430px]"
        } w-full max-w-[660px] h-[547px] overflow-y-auto flex flex-col`}
      >
        <div className="flex flex-col justify-between h-full">
          {modalType === "login" ? (
            <Login setModalType={setModalType} />
          ) : modalType === "signup" ? (
            <Signup setModalType={setModalType} />
          ) : modalType === "orders" ? (
            <YourOrders />
          ) : modalType === "chooseGift" ? (
            <ChooseGift />
          ) : modalType === "cart" ? (
            <Cart setModalType={setModalType}/>
          ) : (
            <Profile setModalType={setModalType} />
          )}

          <img src={ICONS.bonhomie} alt="" className="w-full mt-8" />
        </div>
      </Modal>

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Product images for smaller device */}
      <ImageCarousel />

      <div className="flex flex-col lg:flex-row gap-9 mt-5 md:mt-8 px-4 md:px-[56px]">
        {/* Product images for bigger screens */}
        <ProductImages />

        {/* Product Details */}
        <div className="w-full lg:w-[40%]">
          {/* Product name */}
          <h1 className="text-2xl md:text-[32px] font-bold leading-normal md:leading-[44px] text-[#333]">
            The Ray of joy-white tees
          </h1>

          {/* MRP tagline */}
          <p className="text-sm md:text-lg font-medium leading-normal md:leading-[32px] text-[#888] mt-[14px] md:mt-5">
            MRP Inclusive of all taxes
          </p>

          {/* Price & Rating */}
          <div className="flex items-center gap-4 mt-[6px]">
            {/* Price */}
            <h1 className="text-[32px] md:text-[40px] font-semibold md:font-medium text-[#454545] leading-normal">
              Rs. 2000
            </h1>
            <img
              src={ICONS.straightLine}
              alt="staright-line-cion"
              className="h-[45px]"
            />

            <img src={ICONS.star} alt="star-icon" className="size-6" />
            <h1 className="text-xl font-semibold text-[#333] leading-normal">
              4.5
            </h1>
          </div>

          {/* Product description */}
          <p className="text-base md:text-lg font-medium leading-6 md:leading-[32px] text-[#888] mt-5 md:mt-6">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. ac aliquet
            odio . Class aptent taciti sociosqu a... more
          </p>

          {/* Sizes */}
          <div className="mt-6 border-b md:border-none border-[#D1D1D1] border-dashed pb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-[#333] leading-normal">
                Sizes
              </h1>
              <div className="px-3 py-2 bg-[#F6F6F6] rounded-xl flex items-center gap-3">
                <img src={ICONS.size} alt="size-icon" className="size-6" />
                <h1 className="text-sm md:text-base font-semibold leading-6 text-[#454545]">
                  Size Guide
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              {/* Sizes card */}
              {sizes?.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setProductSize(size)}
                  className={`${
                    productSize === size
                      ? "bg-[#FFF1F3] border-[#FF6D8B] text-[#FF6D8B]"
                      : "border-[#E7E7E7] text-[#454545]"
                  } flex h-[56px] px-3 py-2 justify-center items-center gap-3 rounded-lg border text-lg font-medium leading-8 w-full`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* buttons */}
          <div className="hidden md:flex items-center gap-[10px] mt-6 border-b border-[#D1D1D1] border-dashed pb-6">
            <button className="border border-[#333] rounded-xl px-6 py-[10px] flex items-center justify-between h-14 w-[320px] text-sm font-semibold leading-6 text-[#333]">
              Add to Bag
              <img src={ICONS.cart} alt="cart-icon" className="size-5" />
            </button>

            <button className="text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-sm h-14 w-[202px]">
              Buy Now
            </button>
          </div>

          {/* Unlock Freebies */}
          <UnlockFreebies />

          <div className="border-b border-[#D1D1D1] border-dashed pb-6"></div>

          {/* Delivery Options */}
          <DeliveryOptions />

          {/* Delivery details */}
          <DeliveryDetails />

          {/* Details cards */}
          <div className="flex flex-col gap-6 mt-6 border-b border-[#D1D1D1] border-dashed pb-6">
            <DetailCard
              variant="clothDetails"
              icon={ICONS.clothDetails}
              title={"Cloth Details"}
              description={
                "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu"
              }
            >
              <div className="space-y-4">
                <p className="text-[#454545] text-lg font-medium leading-8">
                  Made with{" "}
                  <span className="font-bold">
                    80% cotton, 10% polyester, 5% nylon and 5% raynon
                  </span>
                </p>

                <p className="text-[#454545] text-lg font-medium leading-8">
                  Clean easily without hassle with cold machine wash.
                </p>
              </div>
            </DetailCard>

            <DetailCard
              variant="productStory"
              icon={ICONS.tshirt}
              title={"Product Story"}
              description={
                "Horem ipsum dolor sit amet, consectetur  elit. Nunc vulputate libero et velit , ac aliquet odio mattis. Class aptent taciti sociosqu."
              }
            ></DetailCard>

            <DetailCard
              variant="shippingDetails"
              icon={ICONS.deliveryVan}
              title={"Shipping Details"}
              description={
                "Processed on the same day as the order and shipped within 1-2 days from the date of order. The order should reach your doorstep in 3-4 business days."
              }
            ></DetailCard>
          </div>

          {/* Product info (Product Code, Collection, Made In) */}
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
