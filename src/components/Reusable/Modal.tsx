import React from "react";
import { ICONS } from "../../assets";
import { useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/Features/Modal/ModalSlice";

const Modal = ({ children, openModal1, setOpenModal1, modalType,setModalType, classNames, title }) => {
  const dispatch= useDispatch();
  return (
    <div className="mx-auto w-fit">
      <div
        onClick={() => setOpenModal1(dispatch(setOpenModal(false)))}
        className={`fixed z-[100] w-screen ${
          openModal1 ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 grid place-items-center bg-gray-800/60 duration-100 dark:bg-transparent`}
      >
       <div className=" absolute overflow-y-auto">
       <div
          onClick={(e_) => e_.stopPropagation()}
          className={`rounded-lg bg-white drop-shadow-2xl ${
            openModal1
              ? "opacity-1 duration-300"
              : "scale-110 opacity-0 duration-150 "
          } ${classNames}`}
        >
            {/* Heading & cross icon */}
          <div className="flex items-center justify-between pt-8 px-8">
            <div className="flex items-center gap-[10px]">
            {
              modalType === "chooseGift" &&
              <img onClick={() => setModalType(dispatch(setModalType("cart")))} src={ICONS.leftArrow} alt="left arrow" className="size-3 cursor-pointer" />
            }

            <h1 className="text-xl font-semibold text-[#262626] leading-normal">
              {title}
            </h1>
            </div>
            <img
             onClick={() => setOpenModal1(dispatch(setOpenModal(false)))}
              src={ICONS.cross}
              alt="cross-icon"
              className="size-5 cursor-pointer"
            />
          </div>
          <div className="pb-0">
          {children}
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Modal;
