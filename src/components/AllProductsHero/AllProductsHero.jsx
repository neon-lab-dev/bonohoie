import { ICONS, IMAGES } from "../../assets";

const AllProductsHero = () => {
  return (
    <div className="bg-[#3645DA] font-Montserrat relative border-b-[12px] border-[#DEE4FB]">
      <div className="px-4 md:px-14 flex flex-col xl:flex-row justify-between">
        <div className="flex flex-col gap-14 justify-between pb-0 md:pb-[60px]">
        <p className="block md:hidden text-center text-white text-sm leading-6 font-semibold mt-[52px]">
        COMFORT ALL THE WAY
          </p>
          <h1 className="text-white text-[40px] 2xl:text-[56px] font-semibold mt-0 md:mt-[60px] z-20 text-center md:text-start">
            Tees made comfortable with Bonhomie
          </h1>
          <p className="text-white text-sm leading-6 font-semibold z-10 hidden md:block">
            200 +
            <br />
            PRODUCTS
          </p>
        </div>
        <img src={IMAGES.productsBannerImage} alt="" className="hidden xl:block z-10" />

        <div className="flex flex-col items-end gap-0 md:gap-[116px] mb-10 md:mb-0">
        <div className="flex flex-col items-center md:items-end gap-7 mt-[80px] z-10">
          <p className="text-white text-sm leading-6 font-normal text-center md:text-justify">
            Supplying your child with the prettiest, coziest clothes possible at
            the most affordable prices.
          </p>
          <button className="text-white text-sm leading-6 font-semibold border border-white rounded-xl py-[10px] px-3 flex items-center gap-[10px] w-fit">
            See Products
            <img src={ICONS.filterWhite2} alt="" />
          </button>
        </div>
        <p className="text-white text-sm leading-6 font-semibold z-10 hidden md:block ">
        COMFORT ALL
            <br />
            THE WAY
          </p>
        </div>

      </div>

      <img src={IMAGES.BonhomieDarkIcon} alt="" className="absolute bottom-0 z-0" />
    </div>
  );
};

export default AllProductsHero;
