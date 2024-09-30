import { ICONS, IMAGES } from "../../assets";
import ProductImages from "./ProductImages";
import { useEffect, useState } from "react";
import DetailCard from "../../components/Reusable/DetailCard";
import ImageCarousel from "./ImageCarousel";
import DeliveryOptions from "./DeliveryOptions";
import DeliveryDetails from "./DeliveryDetails";
import UnlockFreebies from "./UnlockFreebies";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "./ProductInfo";
import { useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { setModalType, setOpenModal } from "../../redux/Features/Modal/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import ExpandableDescription from "./ExpandableDescription";
import { useAddToWishListMutation } from "../../redux/Features/WishList/wishListApi";
import { useCurrentUser } from "../../redux/Features/Auth/authSlice";


// Made in missing in api
// Product Code missing in api
// Collection missing in api
const ProductDetails = () => {
  const dispatch = useDispatch();
  const productDetail = useLoaderData();
  console.log(productDetail);

  const {_id, name, description, ratings, images, sizes} = productDetail.product

  // State to track selected size and price
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

   // State to track selected products with sizes
   const [selectedProducts, setSelectedProducts] = useState({}); 

  //  Setting the first size product in state automatically befor clicking
   useEffect(() => {
    if (sizes.length > 0) {
      const firstSize = sizes[0];
      setSelectedSize(firstSize);
      setSelectedProducts({
        productId: _id,
        name: name,
        selectedSize: firstSize.size,
        price: calculatePrice(firstSize.basePrice, firstSize.discountedPercent),
        image: images[0] || ICONS.imageIcon,
      });
    }
  }, [sizes, _id, name, images]);

   console.log(selectedProducts);

  // Discount price calculation
  const calculatePrice = (basePrice, discountedPercent) => {
    return basePrice - (basePrice * discountedPercent) / 100;
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);

    setSelectedProducts({
      productId: _id,
      name: name,
      selectedSize: size.size,
      price: calculatePrice(size.basePrice, size.discountedPercent),
      image: images[0] || ICONS.imageIcon,
    });

  };

  // Breadcrumb menus
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Tees", link: "/tees" },
    { label: "Age Group", link: "/tees/age-group" },
    { label: name },
  ];


  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    // Retrieve existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(
      (cartProduct) => cartProduct?.productId === _id
    );

    if (!existingProduct) {
      // Add the new product to the cart array
      cart.push({
        productId: selectedProducts?.productId,
        name: selectedProducts?.name,
        size: selectedProducts?.selectedSize,
        basePrice: selectedProducts?.price || 0,
        // discountedPercent: product.sizes[0]?.discountedPercent || 0,
        image: selectedProducts?.image?.url || ICONS.imageIcon,
        quantity : 1
      });

      // Save the updated array back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(true);
      toast.success(`${name} added to cart!`);
    } else {
      // If the product is already in the cart, remove it
      cart = cart.filter(
        (cartProduct) => cartProduct.productId !== _id
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      setIsInCart(false);
      toast.success(`${name} removed from cart!`);
    }
  };

  const user = useSelector(useCurrentUser);


  const [addToWishList] = useAddToWishListMutation();

  const handleAddToWishList = async () => {
    // Check if the user is logged in
    if (user) {
      const productId = {
        id: _id,
      };

      toast.promise(addToWishList(productId).unwrap(), {
        loading: "Adding to wish list...",
        success: `${name} has been added to wish list`,
        error: (error) => {
          return error?.data?.message || "Failed to add to wish list";
        },
      });
    } else {
      // Open modal if the user is not logged in.
      dispatch(setModalType("login"));
      dispatch(setOpenModal(true));
    }
  };


  return (
    <div className="max-w-[1440px] mx-auto font-Montserrat">

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Product images for smaller device */}
      <ImageCarousel images={images}/>

      <div className="flex flex-col lg:flex-row gap-9 mt-5 md:mt-8 px-4 md:px-[56px]">
        {/* Product images for bigger screens */}
        <ProductImages images={images} />

        {/* Product Details */}
        <div className="w-full lg:w-[40%]">
          {/* Product name */}
          <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-[32px] font-bold leading-normal md:leading-[44px] text-[#333] capitalize">
            {name}
          </h1>

          <img
          onClick={handleAddToWishList}
        // src={isInCart ? ICONS.redHeart : IMAGES.heart}
        src={IMAGES.heart}
        className="cursor-pointer size-5"
        alt="Heart Icon"
      />
          </div>

          {/* MRP tagline */}
          <p className="text-sm md:text-lg font-medium leading-normal md:leading-[32px] text-[#888] mt-[14px] md:mt-5">
            MRP Inclusive of all taxes
          </p>

          {/* Price & Rating */}
          <div className="flex items-center gap-4 mt-[6px]">
            {/* Price */}
            <h1 className="text-[32px] md:text-[40px] font-semibold md:font-medium text-[#454545] leading-normal">
              Rs.  {calculatePrice(selectedSize.basePrice, selectedSize.discountedPercent)}
            </h1>
            <img
              src={ICONS.straightLine}
              alt="staright-line-cion"
              className="h-[45px]"
            />

            <img src={ICONS.star} alt="star-icon" className="size-6" />
            <h1 className="text-xl font-semibold text-[#333] leading-normal">
              {ratings}
            </h1>
          </div>

          {/* Product description */}

          <div className="mt-5 md:mt-6">
          <ExpandableDescription description={description} />

    </div>

          {/* Sizes */}
          <div className="mt-11 border-b md:border-none border-[#D1D1D1] border-dashed pb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-[#333] leading-normal">
                Sizes
              </h1>
              <div className="px-3 py-2 bg-[#F6F6F6] rounded-xl flex items-center gap-3">
                <img src={ICONS.size} alt="size-icon" className="size-6" />
                <h1 className="text-sm md:text-base font-semibold leading-6 text-[#454545]">
                  Size Guide
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              {/* Sizes card */}
              {sizes?.map((size, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  className={`${
                    selectedSize.size === size.size
                      ? "bg-[#FFF1F3] border-[#FF6D8B] text-[#FF6D8B]"
                      : "border-[#E7E7E7] text-[#454545]"
                  } flex h-[56px] px-3 py-2 justify-center items-center gap-3 rounded-lg border text-lg font-medium leading-8 w-full max-w-[103px]`}
                >
                  {size?.size}
                </button>
              ))}
            </div>
          </div>

          {/* buttons */}
          <div className="hidden md:flex items-center gap-[10px] mt-6 border-b border-[#D1D1D1] border-dashed pb-6">
            <button 
            onClick={() => {
              handleAddToCart()
              setModalType(dispatch(setModalType("cart")));
              setOpenModal(dispatch(setOpenModal(true)));
            }}
             className="border border-[#333] rounded-xl px-6 py-[10px] flex items-center justify-between h-14 w-full md:w-[320px] text-sm font-semibold leading-6 text-[#333]">
              Add to Bag
              <img src={ICONS.cart} alt="cart-icon" className="size-5" />
            </button>

            <button className="text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-sm h-14 w-full md:w-[202px]">
              Buy Now
            </button>
          </div>

          {/* Unlock Freebies */}
          <UnlockFreebies />

          <div className="border-b border-[#D1D1D1] border-dashed pb-6"></div>

          {/* Delivery Options */}
          <DeliveryOptions />

          {/* Delivery details */}
          <DeliveryDetails />

          {/* Details cards */}
          <div className="flex flex-col gap-6 mt-6 border-b border-[#D1D1D1] border-dashed pb-6">
            <DetailCard
              variant="clothDetails"
              icon={ICONS.clothDetails}
              title={"Cloth Details"}
              description={
                "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu"
              }
            >
              <div className="space-y-4">
                <p className="text-[#454545] text-lg font-medium leading-8">
                  Made with{" "}
                  <span className="font-bold">
                    80% cotton, 10% polyester, 5% nylon and 5% raynon
                  </span>
                </p>

                <p className="text-[#454545] text-lg font-medium leading-8">
                  Clean easily without hassle with cold machine wash.
                </p>
              </div>
            </DetailCard>

            <DetailCard
              variant="productStory"
              icon={ICONS.tshirt}
              title={"Product Story"}
              description={
                "Horem ipsum dolor sit amet, consectetur  elit. Nunc vulputate libero et velit , ac aliquet odio mattis. Class aptent taciti sociosqu."
              }
            ></DetailCard>

            <DetailCard
              variant="shippingDetails"
              icon={ICONS.deliveryVan}
              title={"Shipping Details"}
              description={
                "Processed on the same day as the order and shipped within 1-2 days from the date of order. The order should reach your doorstep in 3-4 business days."
              }
            ></DetailCard>
          </div>

          {/* Product info (Product Code, Collection, Made In) */}
          <ProductInfo productCode={_id}/>
        </div>

        <div
        style={{
          boxShadow: "0px -4px 4px 0px rgba(0, 0, 0, 0.06)",
        }}
        className="z-10 fixed bottom-0 right-0 left-0 flex md:hidden items-center gap-3 bg-white px-4 py-3 justify-center w-full"
      >
        <div className="flex items-center gap-[10px] w-full">
            <button
            onClick={() => {
              handleAddToCart();
              setModalType(dispatch(setModalType("cart")));
              setOpenModal(dispatch(setOpenModal(true)));
            }}
            className="border border-[#333] rounded-xl px-6 py-[10px] flex items-center justify-between h-14 w-full md:w-[320px] text-sm font-semibold leading-6 text-[#333]">
              Add to Bag
              <img src={ICONS.cart} alt="cart-icon" className="size-5" />
            </button>

            <button className="text-white px-6 py-[10px] bg-[#F82456] rounded-xl text-sm h-14 w-full md:w-[202px]">
              Buy Now
            </button>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
