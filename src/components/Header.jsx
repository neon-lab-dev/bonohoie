// import { IMAGES } from '../assets';
// import React, { useState } from 'react';

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="p-4 bg-white text-[#333333]">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           className="block md:hidden text-white focus:outline-none"
//         >
//           {isOpen ? (
//             <img src={IMAGES.hamburger} alt="hamburger" className="h-6 w-6" />
//           ) : (
//             <img src={IMAGES.hamburger} alt="hamburger" className="h-6 w-6" />
//           )}
//         </button>

//         <ul className="md:flex md:flex-row md:space-y-0 md:space-x-6 md:mt-0 hidden">
//             <li className=''>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 Boys
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 Girls
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 New Born
//               </a>
//             </li>
//         </ul>
//         <img src={IMAGES.bonhomie_header} alt="bonhomie" className="h-12 w-28" />
//         <ul className="md:flex md:flex-row justify-center items-center md:space-y-0 md:space-x-6 md:mt-0 hidden">
//             <li>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 text-[#333333] hover:text-gray-300 ">
//                 FAQs
//               </a>
//             </li>
//             <img src={IMAGES.cart} alt="cart" className="h-4 w-4" />

//         </ul>
//         <div className='flex gap-3  md:hidden'>
//             <img src={IMAGES.search_grey} alt="search" className="h-4 w-4" />
//             <img src={IMAGES.heart_grey} alt="heart" className="h-4 w-4 " />
//             <img src={IMAGES.cart} alt="cart" className="h-4 w-4" />
//         </div>
        
//         {/* Navigation Links - Slide-in Menu */}
//         <nav
//           className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform md:hidden ${
//             isOpen ? 'translate-x-0' : '-translate-x-full'
//           } transition-transform duration-300 ease-in-out md:static md:w-auto md:transform-none`}
//         >
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 md:hidden">
//             <li className=''>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 Boys
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 Girls
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 New Born
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { IMAGES } from '../assets';
import React, { useState, useEffect, useRef } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // If the clicked element is outside the navRef, close the menu
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="p-4 bg-white text-[#333333]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <img src={IMAGES.hamburger} alt="hamburger" className="h-6 w-6" />
          ) : (
            <img src={IMAGES.hamburger} alt="hamburger" className="h-6 w-6" />
          )}
        </button>

        <ul className="md:flex md:flex-row md:space-y-0 md:space-x-6 md:mt-0 hidden">
          <li className="">
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              Boys
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              Girls
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              New Born
            </a>
          </li>
        </ul>
        <img src={IMAGES.bonhomie_header} alt="bonhomie" className="h-12 w-28" />
        <ul className="md:flex md:flex-row justify-center items-center md:space-y-0 md:space-x-6 md:mt-0 hidden">
          <li>
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 text-[#333333] hover:text-gray-300">
              FAQs
            </a>
          </li>
          <img src={IMAGES.cart} alt="cart" className="h-4 w-4" />
        </ul>
        <div className="flex gap-3 md:hidden">
          <img src={IMAGES.search_grey} alt="search" className="h-4 w-4" />
          <img src={IMAGES.heart_grey} alt="heart" className="h-4 w-4 " />
          <img src={IMAGES.cart} alt="cart" className="h-4 w-4" />
        </div>

        {/* Navigation Links - Slide-in Menu */}
        <nav
          ref={navRef}
          className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:static md:w-auto md:transform-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 md:hidden">
            <li className="">
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                Boys
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                Girls
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                New Born
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 pl-5 text-[#333333] hover:text-gray-300 border-b border-[##E7E7E7]">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
