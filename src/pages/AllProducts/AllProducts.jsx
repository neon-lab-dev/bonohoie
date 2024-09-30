import { useEffect, useState } from "react";
import { ICONS } from "../../assets";
import AllProductsHero from "../../components/AllProductsHero/AllProductsHero";
import SelectDropdown from "../../components/Reusable/SelectDropdown";
import AllProductCard from "./AllProductCard";
import { useGetAllProductsQuery } from "../../redux/Features/Products/productApi";
import ProductCardLoader from "../../components/Loaders/ProductCardLoader";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter/Filter";
import axios from "axios";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const products = useParams();
  const { data: allProducts, isLoading: isAllProductsLoading } = useGetAllProductsQuery();
  const [categories, setCategories] = useState([]);
  const [ageOptions, setAgeOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [genderOptions, setGenderOptions] = useState([]);

  const sortOptions = ["Low to High", "High to Low"];

  const [filteredProducts, setFilteredProducts] = useState([]);

  // State for filter and search
  const [selectedCategory, setSelectedCategory] = useState(products.category);
  console.log(selectedCategory);
  const [selectedSortOrder, setSelectedSortOrder] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [isSortExpanded, setIsSortExpanded] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const toggleSortExpand = () => setIsSortExpanded(!isSortExpanded);
  const toggleFilterExpand = () => setIsFilterExpanded(!isFilterExpanded);


  const priceRangeOptions = [
    /* ...options... */
  ];

  useEffect(() => {
    if (allProducts?.products) {
      const ageSet = new Set();
      const colorSet = new Set();
      const genderSet = new Set();

      allProducts.products.forEach((product) => {
        if (product.age) ageSet.add(product.age);
        if (product.color) colorSet.add(product.color);
        if (product.gender) genderSet.add(product.gender);
      });

      setAgeOptions([...ageSet]);
      setColorOptions([...colorSet]);
      setGenderOptions([...genderSet]);
    }
  }, [allProducts]);

  useEffect(() => {
    axios
      .get("https://bonohomebackend.vercel.app/api/v1/product/categories")
      .then((res) => setCategories(res?.data?.categories))
      .catch((err) => console.log(err));

    const queryParams = {};
    if (searchTerm) queryParams.keyword = searchTerm;
    if (selectedColor) queryParams.color = selectedColor;
    if (selectedCategory) queryParams.category = selectedCategory;
    if (selectedAge) queryParams.age = selectedAge;
    if (selectedGender) queryParams.gender = selectedGender;
    if (selectedSortOrder) queryParams.sortOrder = selectedSortOrder;

    const queryString = new URLSearchParams(queryParams).toString();

    axios
      .get(`https://bonohomebackend.vercel.app/api/v1/products?${queryString}`)
      .then((res) => setFilteredProducts(res?.data?.products))
      .catch((err) => console.log(err));
  }, [
    searchTerm,
    selectedColor,
    selectedCategory,
    selectedAge,
    selectedGender,
    selectedSortOrder,
  ]);

  const handleApplyFilters = (selectedCategories) => {
    setSelectedCategory(selectedCategories);
  };

  return (
    <div className="max-w-[1440px] mx-auto font-Montserrat">
      <AllProductsHero />

      <div className="mt-5 md:mt-8 px-4 md:px-[56px]">
        <div className="flex flex-col lg:flex-row items-start justify-between lg:items-end gap-3 lg:gap-0 mt-20">
          <h1 className="text-[#333333] text-[32px] md:text-[56px] font-medium leading-none">
            Providing the best
          </h1>
          <p className="text-[#888] font-medium">
            showing{" "}
            <span className="text-[#333] font-semibold">
              {filteredProducts?.length}
            </span>{" "}
            products
          </p>

          <div className="flex md:hidden items-center justify-between w-[300px] h-[56px] px-[20px] py-[10px] border border-gray-300 rounded-[8px]">
              <input
                type="text"
                placeholder={"Search for any product"}
                className="outline-none flex-grow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src={ICONS.search}
                alt="search-icon"
                className="size-5 cursor-pointer"
              />
            </div>
        </div>

        {/* Filter Menu */}
        <div className="hidden lg:flex items-center justify-between mt-8">
          <div className="flex items-center gap-3">
            {/* Filter components */}
            <SelectDropdown
              label="Category"
              options={categories}
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
              label="Gender"
              options={genderOptions}
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
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

          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between w-[300px] h-[56px] px-[20px] py-[10px] border border-gray-300 rounded-[8px]">
              <input
                type="text"
                placeholder={"Search for any product"}
                className="outline-none flex-grow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src={ICONS.search}
                alt="search-icon"
                className="size-5 cursor-pointer"
              />
            </div>

            <SelectDropdown
              label="Sort by:"
              options={sortOptions}
              value={selectedSortOrder}
              onChange={(e) => setSelectedSortOrder(e.target.value)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mt-8">
          {isAllProductsLoading ? (
            <ProductCardLoader variant={"allProducts"} />
          ) : (
            filteredProducts?.map((item) => (
              <AllProductCard key={item._id} item={item} />
            ))
          )}
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-[56px]">
          <p className="text-[#888] font-medium">Showing end of results</p>
          <p className="text-[#888] font-medium">
            products{" "}
            <span className="text-[#333] font-semibold">
              {filteredProducts?.length}{" "}
            </span>{" "}
            of {allProducts?.products?.length}
          </p>
        </div>
      </div>

      {/* Sort and Filter Components for Mobile */}
      <Sort
        isSortExpanded={isSortExpanded}
        toggleSortExpand={toggleSortExpand}
      />
      <Filter
        colorOptions={colorOptions}
        categories={categories}
        ageOptions={ageOptions}
        isFilterExpanded={isFilterExpanded}
        toggleFilterExpand={toggleFilterExpand}
        onApplyFilters={handleApplyFilters}
      />

      <div
        style={{ boxShadow: "0px -4px 4px 0px rgba(0, 0, 0, 0.06)" }}
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
          <img src={ICONS.filter} alt="filter-icon" className="size-5" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
