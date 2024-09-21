import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ICONS } from "../../assets";
import PropTypes from 'prop-types';

const FreebiesCard = ({ freebie }) => {
  const { images, name, _id } = freebie;
  const [isFreebieAdded, setIsFreebieAdded] = useState(false);

  const getFreebiesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("freebies")) || [];
  };

  const addFreebieToLocalStorage = () => {
    const freebieData = {
      _id,
      name,
      images,
    };

    let freebies = getFreebiesFromLocalStorage();

    // Check if freebies array length is already 2
    if (freebies.length >= 2) {
      toast.error("You cannot add more than 2 freebies.");
      return;
    }

    const isAlreadyAdded = freebies.some((item) => item._id === _id);

    if (!isAlreadyAdded) {
      freebies.push(freebieData);
      localStorage.setItem("freebies", JSON.stringify(freebies));
      setIsFreebieAdded(true);
      toast.success("Freebie added successfully.");
    } else {
      toast.error("This freebie is already in the list.");
    }
  };

  const removeFreebieFromLocalStorage = () => {
    let freebies = getFreebiesFromLocalStorage();
    freebies = freebies.filter((item) => item._id !== _id);
    localStorage.setItem("freebies", JSON.stringify(freebies));
    setIsFreebieAdded(false);
    toast.success("Freebie removed successfully.");
  };

  useEffect(() => {
    const freebies = getFreebiesFromLocalStorage();
    setIsFreebieAdded(freebies.some((item) => item._id === _id));
  }, [_id]);

  return (
    <div className="z-10 px-3 pt-3 bg-white flex flex-col gap-3 rounded-2xl w-[127px] md:w-[191px] mx-auto border border-[#FCF1C5]">
      <div className="bg-[#FCF6F0] rounded-2xl w-[103px] md:w-[167px] h-[84px] md:h-[124px] p-3 flex justify-center items-center">
        {images?.map((image) => (
          <img key={image?._id} src={image?.url} alt="" className="size-16 md:size-24" />
        ))}
      </div>

      <button
        onClick={isFreebieAdded ? removeFreebieFromLocalStorage : addFreebieToLocalStorage}
        className="px-3 py-[10px] flex items-center gap-1 md:gap-0 justify-between w-full bg-white border border-[#E7E7E7] rounded-xl mb-5"
      >
        {isFreebieAdded ? "Remove" : "Choose"}
        <img src={isFreebieAdded ? ICONS.minus : ICONS.plus} alt="" className="size-4 md:size-5" />
      </button>
    </div>
  );
};

// Prop types validation
FreebiesCard.propTypes = {
  freebie: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      url: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default FreebiesCard;
