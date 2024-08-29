import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import BrandLogoPrimary from "../../assets/logos/BrandLogoPrimary.svg";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/boys">Boys</NavLink>
          </li>
          <li>
            <NavLink to="/girls">Girls</NavLink>
          </li>
          <li>
            <NavLink to="/newborn">New Born</NavLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <NavLink to="/">
          <img src={BrandLogoPrimary} alt="Bonhomie Logo" />
        </NavLink>
      </div>
      <div className="right">
        <ul>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 5.00016C14.1667 2.69898 12.3012 0.833496 10 0.833496C7.69885 0.833496 5.83337 2.69898 5.83337 5.00016M14.1667 5.00016H15.2573C16.9954 5.00016 17.8644 5.00016 18.3613 5.55529C18.8582 6.11042 18.7622 6.97415 18.5702 8.7016L18.3237 10.9204C17.9319 14.4465 17.736 16.2096 16.5495 17.2715C15.363 18.3335 13.5754 18.3335 10 18.3335C6.42471 18.3335 4.63704 18.3335 3.45054 17.2715C2.26405 16.2096 2.06815 14.4465 1.67636 10.9204L1.42983 8.7016C1.23789 6.97415 1.14192 6.11042 1.63878 5.55529C2.13565 5.00016 3.00469 5.00016 4.74277 5.00016H5.83337M14.1667 5.00016H5.83337M15 8.3335H5.00004"
                  stroke="#888888"
                  stroke-width="1.4"
                  stroke-linecap="round"
                />
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
