const ProductCardLoader = ({ variant }) => {
  return (
    <div className={`mx-1 relative font-Montserrat animate-pulse ${variant === "allProducts" ? "w-[195px] md:w-[429px]" : "w-[224px] md:w-[340px]"}`}>
      {/* Image Skeleton */}
      <div className={`bg-[#f3f4f6] flex items-end justify-center h-[280px] md:h-[400px] rounded-xl ${variant === "allProducts" ? "w-[195px] md:w-[429px]" : "w-[224px] md:w-[340px]"}`}>
        <div className="h-[200px] md:h-[340px] w-full bg-[#e5e7eb] rounded-b-xl"></div>
      </div>

      <div className="flex items-center justify-between mt-2 w-full">
        {/* Title Skeleton */}
        {variant === "allProducts" && (
          <div className="h-4 w-28 md:w-36 bg-[#e5e7eb] rounded-md absolute top-4 left-3"></div>
        )}
        {/* Heart Icon Skeleton */}
          <div className="size-2 md:size-6 bg-[#e5e7eb] rounded-full absolute top-4 right-3"></div>
      </div>

      {/* Plus Icon Skeleton */}
      <div className="rounded-md bg-white absolute top-4 md:top-3 right-3 md:hidden">
        <div className="size-5 md:size-6 bg-[#e5e7eb] rounded-md"></div>
      </div>

      {/* Conditional Content */}
      {variant === "allProducts" ? (
        <div className="mt-2">
          {/* Price Skeleton */}
          <div className="h-5 md:h-6 w-32 md:w-64 bg-gray-300 rounded"></div>
          {/* Tax Info Skeleton */}
          <div className="h-3 md:h-4 w-40 md:w-96 bg-gray-300 rounded mt-2"></div>
        </div>
      ) : (
        <div className="mt-[10px]">
          <div className="h-4 w-3/4 bg-[#e5e7eb] rounded-md"></div>
        </div>
      )}
    </div>
  );
};

export default ProductCardLoader;
