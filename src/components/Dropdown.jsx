import { useState } from 'react';
import { ICONS } from '../assets';

const SortButtonWithDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isDropdownOpen && (
        <div 
          className={`fixed inset-0 bg-black opacity-50 z-10 transition-opacity duration-300`} 
          onClick={() => setIsDropdownOpen(false)} 
        />
      )}

      {/* Sort and Filter Buttons */}
      <div
        style={{
          boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.06)',
        }}
        className="z-20 fixed bottom-0 flex items-center gap-3 bg-white px-4 py-3 justify-center"
      >
        <button
          onClick={toggleDropdown}
          className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px]"
        >
          <img src={ICONS.sort} alt="sort-icon" className="size-5" />
          Sort By
        </button>
        <button className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px]">
          <img src={ICONS.filter} alt="filter-icon" className="size-5" />
          Filter
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white h-[400px] z-20 rounded-t-lg shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isDropdownOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ transitionDelay: isDropdownOpen ? '0s' : '0.3s' }}
      >
        {/* Dropdown Content */}
        <p className="text-black text-sm">Dropdown Content Here</p>
        {/* Add your dropdown items here */}
      </div>
    </div>
  );
};

export default SortButtonWithDropdown;
