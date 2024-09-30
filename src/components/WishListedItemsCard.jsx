import PropTypes from "prop-types";
import { ICONS } from "../assets";
import { useGetSingleProductQuery } from "../redux/Features/Products/productApi";
import { useRemoveWishListProductMutation } from "../redux/Features/WishList/wishListApi";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const WishListedItemsCard = ({ item }) => {
  console.log(item);
  
  const {data:wishlistProduct} = useGetSingleProductQuery(item?.product);

  const [removeWishListProduct] = useRemoveWishListProductMutation();
  console.log(wishlistProduct);
  const inStock = wishlistProduct?.product?.sizes[0].stock > 0

  const handleRemoveWishListProduct = async () => {
    try {
      await toast.promise(
        removeWishListProduct(item?.product).unwrap(),
        {
          loading: 'Removing product from wish list...',
          success: `${wishlistProduct?.product?.name} has been removed from wish list`,
          error: 'Failed to remove product from wish list! Please try again.',
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="">
      <div
        className={`${
          inStock ? "bg-[#F6F6F6]" : "bg-[#00000056]"
        } rounded-lg h-[310px] lg:h-[415px] overflow-hidden font-Montserrat mt-10 relative`}
      >
        {!inStock && <div className="absolute inset-0 bg-[#000000]/20"></div>}
        <div className="flex items-center justify-between p-5">
          <Link to={`/product-details/${wishlistProduct?.product?._id}`} className="text-[#454545] text-base font-semibold leading-6 capitalize hover:underline">
            {wishlistProduct?.product?.name}
          </Link>

          <img
          onClick={handleRemoveWishListProduct}
            src={ICONS.redHeart}
            alt="heart-icon"
            className="size-5 cursor-pointer"
          />
        </div>

        <Link to={`/product-details/${wishlistProduct?.product?._id}`}>
        <img
          src={wishlistProduct?.product?.images[0]?.url}
          alt="Item Image"
          className="w-full h-full object-cover"
        />

        {!inStock && (
          <div className="absolute bottom-0 w-full h-12 p-[10px] flex items-center justify-center bg-[#FFFFFF4C]">
            <span className="text-white text-lg font-medium leading-8">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      <div className="mt-4">
        <h1 className="text-[#333] text-base lg:text-[28px] font-semibold leading-normal">
          Rs. {wishlistProduct?.product?.sizes[0].basePrice}
        </h1>
        <p className="text-[#888] text-xs lg:text-base font-normal leading-6 mt-2">
          inclusive of all taxes
        </p>
      </div>
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
  }).isRequired,
};

export default WishListedItemsCard;
