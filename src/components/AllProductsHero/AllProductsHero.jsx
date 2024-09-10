import { ICONS, IMAGES } from "../../assets";

const AllProductsHero = () => {
  return (
    <div className="bg-[#3645DA] font-Montserrat relative border-b-[12px] border-[#DEE4FB]">
      <div className="px-14 flex justify-between">
        <div>
          <h1 className="text-white text-[56px] font-semibold mt-[60px] z-10">
            Tees made comfortable with Bonhomie
          </h1>
          <p className="text-white text-sm leading-6 font-semibold z-10">
            200 +
            <br />
            PRODUCTS
          </p>
        </div>
        <img src={IMAGES.productsBannerImage} alt="" className="z-10" />

        <div className="flex flex-col gap-7 mt-[80px] z-10">
          <p className="text-white text-sm leading-6 font-normal">
            Supplying your child with the prettiest, coziest clothes possible at
            the most affordable prices.
          </p>
          <button className="text-white text-sm leading-6 font-semibold border border-white rounded-xl py-[10px] px-3 flex items-center gap-[10px] w-fit">
            See Products
            <img src={ICONS.filterWhite2} alt="" />
          </button>
        </div>
      </div>

      <img src={IMAGES.BonhomieDarkIcon} alt="" className="absolute bottom-0" />
    </div>
  );
};

export default AllProductsHero;
