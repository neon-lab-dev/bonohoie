import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <img
        onClick={toggleHamburgerMenu}
        src={ICONS.menu}
        alt="menu-icon"
        className="size-4 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
       onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"}`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[328px] h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full mt-5">
          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/"}>Home</Link>
          </p>

          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/about-us"}>About Us</Link>
          </p>

          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/faq"}>FAQs</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
