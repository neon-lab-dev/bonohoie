import { useState } from "react";
import SelectDropdown from "../../components/Resuable/SelectDropdown";
import { ICONS, IMAGES } from "../../assets";
import WishListedItemsCard from "../../components/WishListedItemsCard";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";

const WishListedItems = () => {
  const [isSortExpanded, setIsSortExpanded] = useState(false);

  const toggleSortExpand = () => {
    setIsSortExpanded(!isSortExpanded);
  };

  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const toggleFilterExpand = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

    const wishListedItems = [
        { _id: "1", title: "Beige Shirt", price: 1500, image: IMAGES.child1, inStock: true },
        { _id: "2", title: "Blue Jeans", price: 2000, image: IMAGES.child1, inStock: false },
        { _id: "3", title: "Black Jacket", price: 2500, image: IMAGES.child1, inStock: true },
        { _id: "4", title: "Red Hat", price: 800, image: IMAGES.child1, inStock: true },
        { _id: "5", title: "Green Scarf", price: 1200, image: IMAGES.child1, inStock: false },
        { _id: "6", title: "Yellow Shoes", price: 3000, image: IMAGES.child1, inStock: true },
        { _id: "7", title: "Purple Bag", price: 1800, image: IMAGES.child1, inStock: true },
        { _id: "8", title: "White Sneakers", price: 2200, image: IMAGES.child1, inStock: false },
        { _id: "9", title: "Gray T-Shirt", price: 1000, image: IMAGES.child1, inStock: true },
        { _id: "10", title: "Brown Belt", price: 900, image: IMAGES.child1, inStock: true },
        { _id: "11", title: "Orange Gloves", price: 700, image: IMAGES.child1, inStock: false },
        { _id: "12", title: "Pink Socks", price: 400, image: IMAGES.child1, inStock: true }
      ];
       

      
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const categoryOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const ageOptions = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
  ];

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];

  const priceRangeOptions = [
    { value: "0-50", label: "$0 - $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-200", label: "$100 - $200" },
  ];

  return (
    <div className="mt-[64px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[56px]">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-3 lg:gap-0">
          <h1 className="text-[#333333] text-[32px] md:text-[56px] font-medium leading-none">
            Wish-listed Items
          </h1>
          <p className="text-[#888] font-medium">
            showing <span className="text-[#333] font-semibold">200</span>{" "}
            products
          </p>
        </div>

        {/* Filter menu */}
        <div className="hidden lg:flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
        <SelectDropdown
          label="Category"
          options={categoryOptions}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
        <SelectDropdown
          label="Age"
          options={ageOptions}
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        />

        <SelectDropdown
          label="Color"
          options={colorOptions}
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        <SelectDropdown
          label="Price Range"
          options={priceRangeOptions}
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        />
        </div>


       <div className="flex items-center gap-3">
       <div className="flex items-center justify-between w-[400px] h-[56px] px-[20px] py-[10px] border border-gray-300 rounded-[8px]">
      <input
        type="text"
        placeholder={"Search for any product"}
        className="outline-none flex-grow"
        // onChange={onChange}
      />
      <img src={ICONS.search} alt="search-icon" className="size-5 cursor-pointer" />
    </div>

    <SelectDropdown
          label="Sort by : "
          options={categoryOptions}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
       </div>
       </div>

        {/* Products */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {wishListedItems.map((item) => (
          <WishListedItemsCard key={item._id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-[56px]">
      <p className="text-[#888] font-medium">
      Showing end of results
        </p>

      <p className="text-[#888] font-medium">
      products <span className="text-[#333] font-semibold">200</span>{" "} of 200
          </p>
      </div>
      </div>

      <Sort isSortExpanded={isSortExpanded} toggleSortExpand={toggleSortExpand}/>
      <Filter isFilterExpanded={isFilterExpanded} toggleFilterExpand={toggleFilterExpand}/>
      {/* <SortButtonWithDropdown/> */}


      <div style={{
    boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.06)'
  }} className="z-10 fixed bottom-0 right-0 left-0 flex lg:hidden items-center gap-3 bg-white px-4 py-3 justify-center">
            <button  onClick={toggleSortExpand} className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px]">
                <img src={ICONS.sort} alt="sort-icon" className="size-5" />
                Sort By

        </button>
            <button onClick={toggleFilterExpand} className="bg-[#F6F6F6] text-[#333] text-xs font-semibold rounded-xl px-3 py-[10px] flex items-center justify-center gap-[10px]">
                <img src={ICONS.filter} alt="sort-icon" className="size-5" />
                Filter

        </button>
      </div>




    </div>
  );
};

export default WishListedItems;
