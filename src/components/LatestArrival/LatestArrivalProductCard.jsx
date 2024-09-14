import PropTypes from "prop-types";
import { ICONS, IMAGES } from "../../assets";
import { toast } from "sonner";
import { useAddToWishListMutation } from "../../redux/Features/WishList/wishListApi";
import { Link } from "react-router-dom";

const LatestArrivalProductCard = ({ product }) => {
  
  const [addToWishList] = useAddToWishListMutation();

    const handleAddToWishList = async () => {
        const productId = {
          id: product?._id
        };
      
        toast.promise(
          addToWishList(productId).unwrap(),
          {
            loading: 'Adding to wish list...',
            success: `${product?.name} has been added to wish list`,
            error: (error) => {
              console.log(error?.data?.message); // Log the error to the console
              return error?.data?.message || "Failed to add to wish list"; // Return the error message
            },
          }
        );
      };


  

  return (
    <div className="mx-1 relative font-Montserrat">
      <Link to={`/product-details/${product?._id}`} className="bg-[#F8EBDC] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
        {product?.images?.length > 0 ? (
          <img
            src={product?.images[0]?.url}
            className="h-[240px] md:h-[300px] object-cover"
            alt={product?.name || "Product Image"}
          />
        ) : (
          <img
            src={ICONS.imageIcon}
            className="h-full w-full"
            alt="Placeholder Image"
          />
        )}
      </Link>
      <img
        // src={isInCart ? ICONS.redHeart : IMAGES.heart}
        src={IMAGES.heart}
        className="absolute top-3 right-3 hidden md:block cursor-pointer size-5"
        alt="Heart Icon"
        onClick={handleAddToWishList}
      />
      {/* <div
        className="rounded-md bg-white absolute top-3 right-3 md:hidden cursor-pointer"
        onClick={handleAddToCart}
      >
        <img src={IMAGES.plus_black} className="p-3" alt="Plus Icon" />
      </div> */}
      <p className="text-[#454545] font-semibold text-sm capitalize mt-[10px]">
        {product?.name}
      </p>
    </div>
  );
};

// Props validation using PropTypes
LatestArrivalProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string,
        basePrice: PropTypes.number,
        discountedPercent: PropTypes.number,
      })
    ),
  }),
};

export default LatestArrivalProductCard;