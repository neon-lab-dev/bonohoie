const ProductInfo = ({productCode}) => {
  return (
    <div className="flex items-center gap-3 mt-6 md:mt-8">
      <div className="flex flex-col gap-4 text-base md:text-xl font-medium leading-normal text-[#5D5D5D]">
        <p className="">Product Code</p>
        <p className="">Collection</p>
        <p className="">Made In</p>
      </div>

      <div className="flex flex-col gap-4 text-[#5D5D5D] text-xl font-medium leading-normal">
        <p className="">:</p>
        <p className="">:</p>
        <p className="">:</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Product code */}
        <p className="text-[#333] text-lg md:text-xl font-semibold leading-normal">
        {productCode.substring(0, 7)}
        </p>
        {/* Collection */}
        <p className="text-[#333] text-lg md:text-xl font-semibold leading-normal">
          The Blessing of Sky
        </p>
        {/* Made in */}
        <p className="text-[#333] text-lg md:text-xl font-semibold leading-normal">
          India
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
