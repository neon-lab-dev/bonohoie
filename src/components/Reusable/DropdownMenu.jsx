import { useState } from "react";
import { ICONS } from "../../assets";
import { Link } from "react-router-dom";

const DropdownMenu = ({
  label,
  categoryList,
  ageList,
  closeMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#E7E7E7]">
      <button
        onClick={toggle}
        className="text-[#333] text-2xl font-medium px-8 py-[10px] w-full leading-[34px] text-start flex items-center justify-between"
      >
        {label}
        <img src={ICONS.downArrow} alt="down-arrow" className="size-4" />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <div className="overflow-hidden flex justify-between mt-3 pb-5">
          {/* Shop by category */}
          <div className="flex flex-col gap-[22px]">
            <h1 className="text-[#262626] text-sm font-bold px-8 leading-6 text-start">
              Shop by category
            </h1>

            <div className="flex flex-col gap-5">
              {categoryList.map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  onClick={closeMenu}
                >
                  <p className="text-[#333] text-sm font-medium px-8 leading-6 text-start hover:cursor-pointer">
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
              {ageList.map((age, index) => (
                <Link
                  key={index}
                  to={age.path}
                  onClick={closeMenu}
                >
                  <p className="text-[#333] text-sm text-start px-4 font-medium leading-6 hover:cursor-pointer">
                    {age.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
