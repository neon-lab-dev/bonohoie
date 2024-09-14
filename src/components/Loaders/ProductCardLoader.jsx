

const ProductCardLoader = () => {
    return (
        <div className="mx-1 relative font-Montserrat animate-pulse">
        {/* Image Skeleton */}
        <div className="bg-[#f3f4f6] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
          <div className="h-[340px] w-full bg-[#e5e7eb]"></div>
        </div>
  
        {/* Heart Icon Skeleton */}
        <div className="absolute top-3 right-3 hidden md:block">
          <div className="h-6 w-6 bg-[#e5e7eb] rounded-full"></div>
        </div>
  
        {/* Plus Icon Skeleton */}
        <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
          <div className="h-8 w-8 bg-[#e5e7eb] rounded-md p-3"></div>
        </div>
  
        {/* Text Skeleton */}
        <div className="mt-[10px]">
          <div className="h-4 w-3/4 bg-[#e5e7eb] rounded-md"></div>
        </div>
      </div>
    );
};

export default ProductCardLoader;