import React from "react";
import "./Desktop2.css";
function Desktop2() {
  return (
    <div className="desktop2">
      <div className="desktop2-top"></div>
      <div className="desktop2-bottom">
        <div className="desktop2-header">
          <h1>Providing the best</h1>
          <span>
            showing <b>200</b> products
          </span>
        </div>
        <div className="filter-bar">
          <div className="filter-bar-left">
            <select className="filter-item">
              <option>Category</option>
              <option>All Products</option>
              <option>Coords set</option>
              <option>Tees</option>
              <option>Shirts</option>
              <option>Bottoms</option>
              <option>Accessories</option>
            </select>

            <select className="filter-item">
              <option>Age</option>
              <option>3-4 yrs</option>
              <option>5-6 yrs</option>
              <option>7-8 yrs</option>
            </select>

            <select className="filter-item">
              <option>Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>

            <select className="filter-item">
              <option>Price Range</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
            </select>
          </div>
          <div className="filter-bar-right">
            <div className="search-bar">
              <input type="text" placeholder="Search for any product" />
              <button className="search-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M15.3746 14.5509C15.1012 14.2776 14.658 14.2776 14.3846 14.5509C14.1113 14.8243 14.1113 15.2675 14.3846 15.5409L15.3746 14.5509ZM17.7179 18.8742C17.9912 19.1475 18.4345 19.1475 18.7078 18.8742C18.9812 18.6008 18.9812 18.1576 18.7078 17.8842L17.7179 18.8742ZM6.83722 4.12183C7.21906 4.06135 7.47958 3.70278 7.4191 3.32094C7.35862 2.9391 7.00005 2.67859 6.61821 2.73906L6.83722 4.12183ZM2.57278 6.7845C2.5123 7.16634 2.77282 7.52491 3.15466 7.58538C3.5365 7.64586 3.89506 7.38535 3.95554 7.00351L2.57278 6.7845ZM14.3846 15.5409L17.7179 18.8742L18.7078 17.8842L15.3746 14.5509L14.3846 15.5409ZM8.21289 15.1792C4.45735 15.1792 1.41289 12.1347 1.41289 8.37915H0.0128906C0.0128906 12.9079 3.68416 16.5792 8.21289 16.5792V15.1792ZM15.0129 8.37915C15.0129 12.1347 11.9684 15.1792 8.21289 15.1792V16.5792C12.7416 16.5792 16.4129 12.9079 16.4129 8.37915H15.0129ZM8.21289 1.57915C11.9684 1.57915 15.0129 4.62361 15.0129 8.37915H16.4129C16.4129 3.85042 12.7416 0.17915 8.21289 0.17915V1.57915ZM8.21289 0.17915C3.68416 0.17915 0.0128906 3.85042 0.0128906 8.37915H1.41289C1.41289 4.62361 4.45735 1.57915 8.21289 1.57915V0.17915ZM6.61821 2.73906C4.5358 3.06889 2.9026 4.70209 2.57278 6.7845L3.95554 7.00351C4.19048 5.52015 5.35386 4.35677 6.83722 4.12183L6.61821 2.73906Z"
                    fill="#B0B0B0"
                  />
                </svg>
              </button>
            </div>

            <select className="filter-item">
              <option>Sort by: relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Sellers</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
