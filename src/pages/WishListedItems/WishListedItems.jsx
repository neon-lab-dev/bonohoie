import { useState } from "react";
import { ICONS } from "../../assets";
import WishListedItemsCard from "../../components/WishListedItemsCard";
import Sort from "../../components/Sort";
import { useGetMeQuery } from "../../redux/Features/Auth/authApi";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter/Filter";

const WishListedItems = () => {
  const {data:wishListProducts, refetch, isLoading:isWishlistedProductsLoading} = useGetMeQuery();
  
  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const toggleSortExpand = () => {
    setIsSortExpanded(!isSortExpanded);
  };


  const toggleFilterExpand = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };


  return (
    <div className="mt-[64px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[56px]">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-3 lg:gap-0">
          <h1 className="text-[#333333] text-[32px] md:text-[56px] font-medium leading-none">
            Wish-listed Items
          </h1>
          
        </div>


        {/* Products */}
        {
          wishListProducts?.user?.wishlist?.length === 0 ?
          <p className="text-center mt-10">No Product Available <Link to={"/all-products"} className="font-semibold underline">Click here</Link> to browse products</p>
          :
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {
            isWishlistedProductsLoading ?
            <p>Loading</p>
            :
          wishListProducts?.user?.wishlist?.map((item) => (
            <WishListedItemsCard key={item._id} item={item} refetch={refetch} />
          ))}
        </div>
        }
      
      </div>

      <Sort
        isSortExpanded={isSortExpanded}
        toggleSortExpand={toggleSortExpand}
      />
      <Filter
        isFilterExpanded={isFilterExpanded}
        toggleFilterExpand={toggleFilterExpand}
      />
      {/* <SortButtonWithDropdown/> */}

      <div
        style={{
          boxShadow: "0px -4px 4px 0px rgba(0, 0, 0, 0.06)",
        }}
        className="z-10 fixed bottom-0 right-0 left-0 flex lg:hidden items-center gap-3 bg-white px-4 py-3 justify-center w-full"
      >
        <button
          onClick={toggleSortExpand}
          className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px] h-12 w-[193px]"
        >
          <img src={ICONS.sort} alt="sort-icon" className="size-5" />
          Sort By
        </button>
        <button
          onClick={toggleFilterExpand}
          className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px] h-12 w-[193px]"
        >
          <img src={ICONS.filter} alt="sort-icon" className="size-5" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default WishListedItems;
