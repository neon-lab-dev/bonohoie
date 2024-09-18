

const SelectDropdown = ({ label, options, onChange, value }) => {
  return (
    <div className="relative w-[144px]">
      <select
        className=" cursor-pointer appearance-none w-full h-[56px] px-3 py-[10px] rounded-lg border border-[#D1D1D1] text-gray-500 focus:outline-none"
        value={value}
        onChange={onChange}
      >
        <option value="">{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectDropdown;