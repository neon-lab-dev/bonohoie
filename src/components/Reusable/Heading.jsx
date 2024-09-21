import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import PropTypes from "prop-types";

const Heading = ({ title, buttonLabel, buttonRoute }) => {
  return (
    <div className="flex justify-between items-center mt-20">
      {/* className={`${width >= 431 ? "flex-row" : "flex-col"} flex gap-2`} */}
      <div>
        <p className="text-[#333333] text-2xl sm:text-[48px] font-semibold md:font-medium text-balance leading-normal md:leading-[68px]">
          {title}
        </p>
      </div>
      <Link
        to={buttonRoute}
        className="border-[#333333] border-[1px] px-3 py-[10px] rounded-xl flex items-center justify-center gap-[10px] text-[#333333] text-xs md:text-sm font-semibold leading-normal md:leading-6 min-w-[154px] w-fit"
      >
        {buttonLabel}
        <img
          src={IMAGES.arrow_black}
          className="size-3 sm:size-5"
          alt="arrow-icon"
        />
      </Link>
    </div>
  );
};

// Prop validation
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonRoute: PropTypes.string.isRequired,
};

export default Heading;
