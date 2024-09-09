/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/page-not-found-animation.json";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="max-w-[900px] px-4 md:px-0 mx-auto font-Montserrat flex flex-col md:flex-row items-center gap-0 md:gap-10">
      <div className="w-full md:w-[600px] h-fit">
      <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      <div className="">
        <h1 className="text-7xl font-extrabold text-[#F82456]">404</h1>
        <h1 className="text-3xl font-semibold mt-4">Page Not Found!!</h1>
        <p className="text-[#888] text-sm max-w-[500px] mt-1 mb-5">Oops! The page you're looking for can't be found. It might have been moved or deleted. Please check the URL or return to our homepage for more information.</p>

        <Link to={"/"}
              className="text-white px-6 py-[10px] bg-[#333] rounded-md text-[13px] font-semibold mx-auto h-14 w-full"
            >
              Go Home
            </Link>
      </div>
    </div>
  );
}
