import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import { Link } from "react-router-dom";
import DropdownMenu from "../Reusable/DropdownMenu";

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

  const categoryList = [
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
  ];
  const ageList = [
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
  ];

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
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[330px] overflow-y-auto h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full mt-5">
          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/"} onClick={() => setIsHamburgerOpen(false)}>
              Home
            </Link>
          </p>

          
          <DropdownMenu
            label="Boys"
            categoryList={categoryList}
            ageList={ageList}
            closeMenu={() => setIsHamburgerOpen(false)}
          />

          {/* Girls Dropdown */}
          <DropdownMenu
            label="Girls"
            categoryList={categoryList}
            ageList={ageList}
            closeMenu={() => setIsHamburgerOpen(false)}
          />

          {/* New Born Dropdown */}
          <DropdownMenu
            label="New Born"
            categoryList={categoryList}
            ageList={ageList}
            closeMenu={() => setIsHamburgerOpen(false)}
          />

          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/about-us"} onClick={() => setIsHamburgerOpen(false)}>
              About Us
            </Link>
          </p>

          <p className="text-[#333] text-2xl font-medium px-8 py-[10px] border-b border-[#E7E7E7] w-full leading-[34px]">
            <Link to={"/faq"} onClick={() => setIsHamburgerOpen(false)}>
              FAQs
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
