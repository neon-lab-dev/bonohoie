import PropTypes from 'prop-types';
import { toast } from "sonner";
import { ICONS } from "../../assets";

const GiftCard = ({ freebie, onRemove }) => {
  const { images, name, _id } = freebie;

  const removeFreebie = () => {
    let freebies = JSON.parse(localStorage.getItem("freebies")) || [];
    freebies = freebies.filter((item) => item._id !== _id);
    localStorage.setItem("freebies", JSON.stringify(freebies));
    toast.success("Freebie removed successfully.");
    onRemove(); // Call the function to update the freebies list
  };

  return (
    <div className="bg-[#FAE18E] rounded-lg border border-[#FCF1C5] font-Montserrat flex justify-between w-[165px] md:w-[184px] p-2">
      <div className="flex gap-2">
        <div className="bg-[#FCF1C5] size-10 rounded-lg flex items-center justify-center">
          <img src={images[0]?.url} alt="" className="size-7" />
        </div>
        <h1 className="text-xs sm:text-sm text-[#262626] font-medium leading-5">{name}</h1>
      </div>

      <img onClick={removeFreebie} src={ICONS.cross} alt="cross-icon" className="size-5 cursor-pointer" />
    </div>
  );
};

// Prop types validation
GiftCard.propTypes = {
  freebie: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default GiftCard;
