import './NavBar.css'
import { NavLink } from "react-router-dom";
import { ICONS } from "../../assets";
import BrandLogoPrimary from "../../assets/logos/BrandLogoPrimary.svg"
import { useEffect, useRef, useState } from "react";
import Modal from "../Reusable/Modal";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/Signup";
import YourOrders from "../YourOrders/YourOrders";
import ChooseGift from "../ChooseGift/ChooseGift";
import Cart from "../Cart/Cart";
import Profile from "../Auth/Profile/Profile";
import { useDispatch, useSelector } from 'react-redux';
import { logout, useCurrentUser } from '../../redux/Features/Auth/authSlice';
import { toast } from 'sonner';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(useCurrentUser);
  console.log(user);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("login");

  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) { 
        setOpen(false)
      }
    };
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close)
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    toast.success("Logged out successfully.")
  };
  

  return (
    <div className="nav-bar font-Montserrat">
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
            <Login setModalType={setModalType} setOpenModal={setOpenModal} />
          ) : modalType === "signup" ? (
            <Signup setModalType={setModalType} setOpenModal={setOpenModal} />
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


    <div className="left">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/boys">Boys</NavLink>
        </li>
        <li>
          <NavLink to="/girls">Girls</NavLink>
        </li>
        <li>
          <NavLink to="/newborn">New Born</NavLink>
        </li>
      </ul>
    </div>
    <div className="logo">
      <NavLink to="/">
        <img src={BrandLogoPrimary} alt="Bonhomie Logo" />
      </NavLink>
    </div>
    <div className="right">
      <ul>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQs</NavLink>
        </li>

          {
            user ?
        <li>
        <div ref={dropDownRef} className="">
        <img onClick={() => setOpen((prev) => !prev)} src={ICONS.profileIcon} alt="profile-icon" className="size-5 cursor-pointer" />

          
          <div className={`${open ? 'visible duration-300' : 'invisible'} bg-white p-4 rounded-l-[20px] rounded-br-[20px] absolute right-28 top-24 z-50 w-[170px] shadow-md flex flex-col items-start gap-5`}>
              <button
              onClick={() => {
                setModalType("orders");
                setOpenModal(true);
                setOpen(false)
              }}
              className='text-[#4F4F4F] text-sm font-medium leading-6'>
              Your Orders
              </button>
              <button 
              onClick={() => {
                setModalType("profile");
                setOpenModal(true);
                setOpen(false)
              }}
              className='text-[#4F4F4F] text-sm font-medium leading-6'>
              Profile
              </button>
              <button onClick={handleLogout} className='text-[#EB5C5C] text-sm font-medium leading-6'>
              Logout
              </button>
          </div>
      </div>
        </li>
        :
        <li 
         onClick={() => {
          setModalType("login");
          setOpenModal(true);
        }}
        >
          <img src={ICONS.profileIcon} alt="profile-icon" className="size-5 cursor-pointer" />
        </li>
        }
        <li>
        <div className="relative w-fit">
        <img src={ICONS.cartGray} alt="cart-icon" className="size-5 cursor-pointer" />
            <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">0</span>
        </div>
       
        </li>
      </ul>
    </div>
  </div>
  );
};

export default NavBar;