import { Link } from "react-router-dom";
import { IMAGES } from "../../assets";
import { useGetAllProductsQuery } from "../../redux/Features/Products/productApi";
import ProductCardLoader from "../Loaders/ProductCardLoader";
import LatestArrivalProductCard from "./LatestArrivalProductCard";

const LatestArrival = () => {
  const { data: latestProducts, error, isLoading: isLatestProductLoading } =
    useGetAllProductsQuery();

  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <p className="text-[#333333] text-2xl sm:text-[40px] font-semibold">
          Latest Arrivals
        </p>
        <Link  to={"/all-products"} className="border-[#333333] border-[1px] px-1 sm:px-3 py-[10px] rounded-xl flex items-center justify-center gap-[10px] text-[#333333] text-[10px] sm:text-sm font-semibold leading-6 w-[130px] md:w-[180px]">
          See All Products
          <img src={IMAGES.arrow_black} className="size-3 sm:size-5" />{" "}
        </Link>
      </div>

      <div className="flex justify-between overflow-x-scroll no-scrollbar my-10">
        {isLatestProductLoading ? (
            // Loader
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
          </div>
        ) : (
          latestProducts?.products?.slice(0,10).map((product) => (
            <LatestArrivalProductCard key={product._id} product={product} error={error} />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestArrival;
