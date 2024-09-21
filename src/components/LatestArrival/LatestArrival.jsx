import { useGetAllProductsQuery } from "../../redux/Features/Products/productApi";
import ProductCardLoader from "../Loaders/ProductCardLoader";
import Heading from "../Reusable/Heading";
import LatestArrivalProductCard from "./LatestArrivalProductCard";

const LatestArrival = () => {
  const { data: latestProducts, error, isLoading: isLatestProductLoading } =
    useGetAllProductsQuery();

  return (
    <div>
      {/* Reusable Heading component */}
      <Heading
        title="Latest Arrivals"
        buttonLabel="See All Products"
        buttonRoute="/all-products"
      />

      <div className="flex justify-between overflow-x-scroll no-scrollbar my-10">
        {isLatestProductLoading ? (
          // Loader
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
          </div>
        ) : (
          latestProducts?.products?.slice(0, 10).map((product) => (
            <LatestArrivalProductCard
              key={product._id}
              product={product}
              error={error}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LatestArrival;
