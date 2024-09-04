import PropTypes from "prop-types";

const Sort = ({ isSortExpanded, toggleSortExpand }) => {
  const sortByItems = [
    { label: "What’s New", value: "What’s New" },
    { label: "Price - high to low", value: "Price - high to low" },
    { label: "Popularity", value: "Popularity" },
    { label: "Discount", value: "Discount" },
    { label: "Price - low to high", value: "Price - low to high" },
    { label: "Customer Rating", value: "Customer Rating" },
  ];

  return (
    <div className="relative z-50">
      {/* Dark Overlay */}
      {isSortExpanded && (
        <div
          onClick={toggleSortExpand}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}

      {/* Sort By Dropdown */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] z-50 font-Montserrat transition-all duration-300 ease-in-out">
        <div
          className={`px-4 py-3 bg-white border rounded-t-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isSortExpanded ? "h-[460px]" : "h-0"
          }`}
          style={{ opacity: isSortExpanded ? 1 : 0 }}
        >
          {/* Header */}
          <p
            onClick={toggleSortExpand}
            className="text-[#454545] font-medium py-4 text-sm border-b border-[#E7E7E7] cursor-pointer"
          >
            SORT BY
          </p>

          {/* Dropdown Content */}
          {isSortExpanded && (
            <div className="flex flex-col mt-4">
              {sortByItems.map((item, id) => (
                <button
                  key={id}
                  className="text-[#333] font-medium text-lg py-4 text-start"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Prop validation
Sort.propTypes = {
  isSortExpanded: PropTypes.bool.isRequired,
  toggleSortExpand: PropTypes.func.isRequired,
};

export default Sort;
