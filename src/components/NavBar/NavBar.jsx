import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { ICONS } from "../../assets";
import BrandLogoPrimary from "../../assets/logos/BrandLogoPrimary.svg";
import { useEffect, useRef, useState } from "react";
import Modal from "../Reusable/Modal";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/Signup";
import YourOrders from "../YourOrders/YourOrders";
import ChooseGift from "../ChooseGift/ChooseGift";
import Cart from "../Cart/Cart";
import Profile from "../Auth/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "../../redux/Features/Auth/authSlice";
import { toast } from "sonner";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { selectModalState, setModalType, setOpenModal } from "../../redux/Features/Modal/ModalSlice";

const navlinks = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Boys",
    path: "",
    icon : ICONS.downArrow,
    categoryList: [
      {
        label: "All Products",
        path: "/all-products",
      },
      {
        label: "Coords set",
        path: "/all-products",
      },
      {
        label: "Tees",
        path: "/all-products",
      },
      {
        label: "Shirts",
        path: "/all-products",
      },
      {
        label: "Bottoms",
        path: "/all-products",
      },
      {
        label: "Accessories",
        path: "/all-products",
      },
    ],
    ageList: [
      {
        label: "3-4 yrs",
        path: "/all-products",
      },
      {
        label: "5-6 yrs",
        path: "/all-products",
      },
      {
        label: "7-8 yrs",
        path: "/all-products",
      },
    ]
  },
  {
    label: "Girls",
    path: "",
    icon : ICONS.downArrow,
    categoryList: [
      {
        label: "All Products",
        path: "/all-products",
      },
      {
        label: "Coords set",
        path: "/all-products",
      },
      {
        label: "Tees",
        path: "/all-products",
      },
      {
        label: "Shirts",
        path: "/all-products",
      },
      {
        label: "Bottoms",
        path: "/all-products",
      },
      {
        label: "Accessories",
        path: "/all-products",
      },
    ],
    ageList: [
      {
        label: "3-4 yrs",
        path: "/all-products",
      },
      {
        label: "5-6 yrs",
        path: "/all-products",
      },
      {
        label: "7-8 yrs",
        path: "/all-products",
      },
    ]
  },
  {
    label: "New Born",
    path: "",
    icon : ICONS.downArrow,
    categoryList: [
      {
        label: "All Products",
        path: "/all-products",
      },
      {
        label: "Coords set",
        path: "/all-products",
      },
      {
        label: "Tees",
        path: "/all-products",
      },
      {
        label: "Shirts",
        path: "/all-products",
      },
      {
        label: "Bottoms",
        path: "/all-products",
      },
      {
        label: "Accessories",
        path: "/all-products",
      },
    ],
    ageList: [
      {
        label: "3-4 yrs",
        path: "/all-products",
      },
      {
        label: "5-6 yrs",
        path: "/all-products",
      },
      {
        label: "7-8 yrs",
        path: "/all-products",
      },
    ]
  },
  {
    label: "About Us",
    path: "about-us",
  },
  {
    label: "FAQs",
    path: "faq",
  },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(useCurrentUser);
  const modalState = useSelector(selectModalState);
  const { openModal, modalType } = modalState;
  console.log(openModal);
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    // Function to update cartItems from localStorage
    const updateCartItems = () => {
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    };

    updateCartItems();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    toast.success("Logged out successfully.");
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-[56px] font-Montserrat w-full my-6">
      {/* Auth , cart, orders modal */}
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
        } w-full max-w-[660px] h-[550px] overflow-y-auto flex flex-col`}
      >
        <div className="flex flex-col justify-between h-full">
          {modalType === "login" ? (
            <Login setModalType={setModalType} setOpenModal={setOpenModal} />
          ) : modalType === "signup" ? (
            <Signup setModalType={setModalType} setOpenModal={setOpenModal} />
          ) : modalType === "orders" ? (
            <YourOrders />
          ) : modalType === "chooseGift" ? (
            <ChooseGift />
          ) : modalType === "cart" ? (
            <Cart setModalType={setModalType} />
          ) : (
            <Profile setModalType={setModalType} />
          )}
          <img src={ICONS.bonhomie} alt="" className="w-full mt-8" />
        </div>
      </Modal>

      <div className="flex items-center justify-between w-full">
      <HamburgerMenu/>
        <div className="flex items-center gap-8">
        {navlinks.slice(0, 4).map((navlink, index) => (
            <div className="relative" key={index}
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
              
                to={`/${navlink.path}`}
                className="text-[#4F4F4F] text-sm font-medium hidden lg:flex items-center gap-2"
              >
                {navlink.label}
                {navlink.icon && (
                  <img
                    src={navlink.icon}
                    alt="dropdown-icon"
                    className="w-[10px] cursor-pointer"
                  />
                )}
              </Link>
              {/* Dropdown */}
              { navlink.categoryList && navlink.ageList &&
                openDropdown === index &&
                <div className="z-20 absolute left-0 top-full duration-300 bg-white p-4 rounded-tr-[20px] rounded-b-[20px] shadow-2xl w-[330px]">
            
        <div className="overflow-hidden flex justify-between mt-3">
          {/* Shop by category */}
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[#262626] text-sm font-bold px-3 leading-6 text-start">
              Shop by category
            </h1>

            <div className="flex flex-col gap-5">
              {
                navlink.categoryList &&
              navlink.categoryList.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                >
                  <p className="text-[#333] text-sm font-medium px-3 leading-6 text-start hover:underline">
                    {category.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Shop by age */}
          <div className="flex flex-col gap-[22px] flex-1">
            <h1 className="text-[#262626] text-sm font-bold px-4 leading-6 text-start">
              Shop by age
            </h1>

            <div className="flex flex-col items-start justify-start gap-5">
              {navlink.ageList &&
              navlink.ageList.map((age, index) => (
                <Link
                  key={index}
                  to={age.path}
                >
                  <p className="text-[#333] text-sm text-start px-4 font-medium leading-6 hover:cursor-pointer">
                    {age.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
              </div>}
            </div>
          ))}
        </div>

        <NavLink to="/">
          <img src={BrandLogoPrimary} alt="Bonhomie Logo" />
        </NavLink>

        <div className="flex items-center gap-5">
          
          {navlinks.slice(4, 8).map((navlink, index) => (
            <Link
              key={index}
              to={navlink.path}
              className="text-[#4F4F4F] text-sm font-medium hidden lg:block"
            >
              {navlink.label}
            </Link>
          ))}
          <a href={"/wish-listed-items"}>
          <img
            src={ICONS.heartIcon}
            alt="heart-icon"
            className="size-5 cursor-pointer"
          />
          </a>
          <ul className="flex items-center gap-5">
            {user ? (
              <li>
                <div ref={dropDownRef}>
                  <img
                    onClick={() => setOpen((prev) => !prev)}
                    src={ICONS.profileIcon}
                    alt="profile-icon"
                    className="size-5 cursor-pointer"
                  />
                  <div
                    className={`${
                      open ? "visible duration-300" : "invisible"
                    } bg-white p-4 rounded-l-[20px] rounded-br-[20px] absolute right-14 md:right-28 top-24 z-50 w-[170px] shadow-md flex flex-col items-start gap-5`}
                  >
                    <button
                      onClick={() => {
                        setModalType(dispatch(setModalType("orders")));
                        setOpenModal(dispatch(setOpenModal(true)));
                        setOpen(false);
                      }}
                      className="text-[#4F4F4F] text-sm font-medium leading-6"
                    >
                      Your Orders
                    </button>
                    <button
                      onClick={() => {
                        setModalType(dispatch(setModalType("profile")));
                        setOpenModal(dispatch(setOpenModal(true)));
                        setOpen(false);
                      }}
                      className="text-[#4F4F4F] text-sm font-medium leading-6"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="text-[#EB5C5C] text-sm font-medium leading-6"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li>
            ) : (
              <li
                onClick={() => {
                  setModalType(dispatch(setModalType("login")));
                  setOpenModal(dispatch(setOpenModal(true)));
                }}
              >
                <img
                  src={ICONS.profileIcon}
                  alt="profile-icon"
                  className="size-5 cursor-pointer"
                />
              </li>
            )}
            {/* Cart icon */}
            <li>
              <div
                onClick={() => {
                  setModalType(dispatch(setModalType("cart")));
                  setOpenModal(dispatch(setOpenModal(true)));
                }}
                className="relative w-fit"
              >
                <img
                  src={ICONS.cartGray}
                  alt="cart-icon"
                  className="size-5 cursor-pointer"
                />
                <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                  {cartItems?.length}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
