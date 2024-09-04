import PropTypes from 'prop-types';
import { ICONS } from '../assets';

const WishListedItemsCard = ({ item }) => {
  const { title, price, image, inStock } = item;
  
  return (
    <div>
      <div className={`${inStock ? "bg-[#F6F6F6]" : "bg-[#00000056]"} rounded-lg h-[400px] overflow-hidden font-Montserrat mt-10 relative`}>
      {!inStock && (
          <div className="absolute inset-0 bg-[#000000]/20"></div>
        )}
        <div className="flex items-center justify-between p-5">
          <h1 className="text-[#454545] text-base font-semibold leading-6">
            {title}
          </h1>

          <img
            src={ICONS.heartIcon}
            alt="heart-icon"
            className="size-5 cursor-pointer"
          />
        </div>

        <img src={image} alt="Item Image" className="w-full h-full object-cover" />

       {
        !inStock &&  <div className='absolute bottom-0 w-full h-12 p-[10px] flex items-center justify-center bg-[#FFFFFF4C]'>
            <span className='text-white text-lg font-medium leading-8'>Out of Stock</span>
        </div>
       }
      </div>

      <div className="mt-4">
        <h1 className="text-[#333] text-[28px] font-semibold leading-normal">
          Rs. {price}
        </h1>
        <p className="text-[#888] text-base font-normal leading-6 mt-2">
          inclusive of all taxes
        </p>
      </div>
    </div>
  );
};

WishListedItemsCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired
};

export default WishListedItemsCard;
