import PropTypes from "prop-types";
import { useState } from "react";
import { ICONS } from "../assets";

const Filter = ({ isFilterExpanded, toggleFilterExpand }) => {
  const [filterTab, setFilterTab] = useState("Category");

  return (
    <div className="relative z-50">
      {/* Dark Overlay */}
      {isFilterExpanded && (
        <div
          onClick={toggleFilterExpand}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      {/* Filter Dropdown */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] z-50 font-Montserrat transition-all duration-300 ease-in-out">
        <div
          className={`bg-white flex flex-col justify-between rounded-t-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isFilterExpanded ? "h-[460px]" : "h-0"
          }`}
          style={{ opacity: isFilterExpanded ? 1 : 0 }}
        >
          <div className="px-4 py-3">
            {/* Header */}
            <p
              onClick={toggleFilterExpand}
              className="text-[#454545] font-medium py-4 text-sm border-b border-[#E7E7E7] cursor-pointer"
            >
              FILTER
            </p>

            {/* Dropdown Content */}
            {isFilterExpanded && (
              <div>
                <div className="flex gap-5 mt-4">
                  {/* Tab buttons */}
                  <div className="flex flex-col">
                    <button
                      onClick={() => setFilterTab("Category")}
                      className={`text-[#333] w-[156px] font-medium text-base py-4 text-start ${
                        filterTab === "Category" ? "bg-[#F6F6F6]" : "bg-white"
                      }`}
                    >
                      Category
                    </button>

                    <button
                      onClick={() => setFilterTab("Age")}
                      className={`text-[#333] w-[156px] font-medium text-base py-4 text-start ${
                        filterTab === "Age" ? "bg-[#F6F6F6]" : "bg-white"
                      }`}
                    >
                      Age
                    </button>

                    <button
                      onClick={() => setFilterTab("Colour")}
                      className={`text-[#333] w-[156px] font-medium text-base py-4 text-start ${
                        filterTab === "Colour" ? "bg-[#F6F6F6]" : "bg-white"
                      }`}
                    >
                      Colour
                    </button>

                    <button
                      onClick={() => setFilterTab("Price Range")}
                      className={`text-[#333] w-[156px] font-medium text-base py-4 text-start ${
                        filterTab === "Price Range"
                          ? "bg-[#F6F6F6]"
                          : "bg-white"
                      }`}
                    >
                      Price Range
                    </button>
                  </div>

                  {/* Filter Content */}
                  <div className="w-full">
                    {filterTab === "Category" && (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between w-full py-4">
                          <label
                            htmlFor="default-checkbox"
                            className="text-[#333] font-medium text-base cursor-pointer"
                          >
                            TShirt
                          </label>
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4  bg-gray-100 border-gray-300 rounded-xl focus:ring-2"
                          />
                        </div>
                      </div>
                    )}

                    {filterTab === "Age" && <div>Age</div>}

                    {filterTab === "Colour" && <div>Colour</div>}

                    {filterTab === "Price Range" && <div>Price Range</div>}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-[#F6F6F6] px-4 py-3 flex justify-end bottom-0 w-full">
            <button className="flex items-center justify-center text-white gap-[10px] px-3 py-[10px] bg-[#F82456] rounded-xl text-xs h-12 w-[152px]">
              <img
                src={ICONS.filterWhite}
                alt="funel-icon"
                className="size-5"
              />
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Filter.propTypes = {
  isFilterExpanded: PropTypes.bool.isRequired,
  toggleFilterExpand: PropTypes.func.isRequired,
};

export default Filter;
