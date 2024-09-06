import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  return (
    <div className="px-4 md:px-[56px] mt-8 font-Montserrat">
      <ol className="flex space-x-2 text-[#888] text-base font-medium leading-6">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLastItem ? (
                <Link to={item.link || "#"} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#454545]">
                  {item.label}
                </span>
              )}
              {!isLastItem && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

// PropTypes validation
Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumbs;
