import { toast } from "sonner";
import { ICONS } from "../../assets";
import { useAddToWishListMutation } from "../../redux/Features/WishList/wishListApi";
import { Link } from "react-router-dom";

const AllProductCard = ({item}) => {
    const { _id, name } = item;

    const [addToWishList] = useAddToWishListMutation();

      
    const handleAddToWishList = async () => {
      const productId = {
        id: _id
      };
    
      toast.promise(
        addToWishList(productId).unwrap(),
        {
          loading: 'Adding to wish list...',
          success: `${name} has been added to wish list`,
          error: (error) => {
            console.log(error?.data?.message); // Log the error to the console
            return error?.data?.message || "Failed to add to wish list"; // Return the error message
          },
        }
      );
    };
      
    return (
        <div>
      <div>
      <div
        className={`bg-[#F6F6F6] rounded-lg h-[270px] lg:h-[415px] overflow-hidden font-Montserrat mt-0 lg:mt-10 relative flex flex-col justify-between`}
      >
        
        <div className="flex items-center justify-between p-5">
          <Link to={`/product-details/${_id}`} className="text-[#454545] text-base font-semibold leading-6 capitalize hover:underline">
            {name}
          </Link>

          <img
          onClick={handleAddToWishList}
            src={ICONS.heartIcon}
            alt="heart-icon"
            className="size-5 cursor-pointer"
          />
        </div>

        {item?.images?.length > 0 ? (
          <Link to={`/product-details/${_id}`}>
          <img
            src={item.images[0].url}
            className="h-full w-full object-cover"
            alt={item?.name || "Product Image"}
          />
          </Link>
          
        ) : (
          <img
            src={ICONS.imageIcon}
            className="h-full w-full"
            alt="Placeholder Image"
          />
        )}
      </div>
      </div>

      <div className="mt-4">
        <h1 className="text-[#333] text-base lg:text-[28px] font-semibold leading-normal">
          Rs. {item.sizes[0].basePrice}
        </h1>
        <p className="text-[#888] text-xs lg:text-base font-normal leading-6 mt-2">
          inclusive of all taxes
        </p>
      </div>
    </div>
    );
};

export default AllProductCard;