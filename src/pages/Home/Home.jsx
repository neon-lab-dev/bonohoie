import { ICONS, IMAGES } from "../../assets";
import { useGetAllProductsQuery } from "../../redux/Features/Products/productApi";
import Hero from "../../components/Hero/Hero";
import LatestArrival from "../../components/LatestArrival/LatestArrival";
import WhyWeLoved from "../../components/WhyWeLoved/WhyWeLoved";
import { Link } from "react-router-dom";

export const Home = () => {
  const {data:products} = useGetAllProductsQuery();
  console.log(products);
  return (
    <>
      <div className="mx-3 overflow-x-hidden md:mx-10">
        <Hero/>

        {/* latest arrivals starts here */}
        <LatestArrival/>

        {/* why are we loved starts here */}
        <WhyWeLoved/>

        {/* bestsellers starts here */}
        <div className="hidden md:block mt-14">
          <div className="flex justify-between">
            <p className="text-[#333333] text-2xl md:hidden font-semibold">
              Summer Essentials
            </p>
            <p className="text-[#333333] hidden md:block md:text-5xl font-medium">
              Bestsellers
            </p>
            <p className="hidden md:block md:w-[350px]">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit{" "}
            </p>
            <button className="border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333] md:hidden">
              See All Products{" "}
              <img src={IMAGES.arrow_black} className="mt-1 ml-1" />{" "}
            </button>
          </div>

          <div className="grid md:grid-cols-[33%_33%_33%] justify-center overflow-x-scroll no-scrollbar mb-10">
            <div className="hidden md:block mx-2 relative my-7 ">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px] rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child1s}
                  className=" h-[240px] md:h-[300px] object-cover object-center"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-8 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                Beige Shirt
              </p>
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>
            <div className="hidden md:block mx-2 relative my-7">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px] rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child2s}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-14 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                Blue Shirt
              </p>
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>
            <div className="hidden md:block mx-2 relative my-7">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child3s}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-14 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                White Shirt
              </p>

              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>

            <div className="hidden md:block mx-2 relative my-7">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child3s}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-14 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                White Shirt
              </p>
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>
            <div className="hidden md:block mx-2 relative my-7">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px] rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child1s}
                  className=" h-[240px] md:h-[300px] object-cover"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-14 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                Beige Shirt
              </p>
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>
            <div className="hidden md:block mx-2 relative my-7">
              <div className="bg-[#F6F6F6] w-[220px] h-[280px] md:w-full md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child2s}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-14 hidden md:block"
              />
              <p className="absolute top-3 left-3 hidden md:block">
                Blue Shirt
              </p>
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-2xl text-[#454545] ">RS. 1500</p>
                <p className="text-[#888888] ">inclusive of all taxes</p>
              </div>
            </div>
          </div>
        </div>

        {/* summer essentials for smaller devices */}
        <div className="md:hidden mb-20 mt-12">
          <div className="flex justify-between items-center mb-5">
            <p className="text-[#333333] text-2xl sm:text-[40px] font-semibold">
              Summer Essentials
            </p>
            <Link  to={"/all-products"} className="border-[#333333] border-[1px] px-1 sm:px-3 py-[10px] rounded-xl flex items-center justify-center gap-[10px] text-[#333333] text-[10px] sm:text-sm font-semibold leading-6 w-[160px] md:w-[160px]">
          See All Products
          <img src={IMAGES.arrow_black} className="size-3 sm:size-5" />{" "}
        </Link>
          </div>

          <ul className="flex justify-between overflow-x-scroll no-scrollbar mb-10">
            <li className="mx-2 relative">
              <div className="bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px] rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child1}
                  className=" h-[240px] md:h-[300px] object-cover"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p>Beige Co-ord set</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child2}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p>Blue Co-ord set</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child3}
                  className=" h-[240px] md:h-[300px] object-cover"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p>Grey Co-ord set</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F8EBDC] w-[220px] h-[280px] md:w-[300px] md:h-[350px]  rounded-xl flex items-end justify-center">
                <img
                  src={IMAGES.child4}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p>White Co-ord set</p>
            </li>
          </ul>
        </div>

        {/*  */}
        <div>
          <div className="flex flex-col md:grid grid-cols-[66%_33%] h-[750px] md:h-[400px] lg:h-[480px]">
            <div className="mx-2 relative object-cover mb-6 h-[420px]">
              <img
                src={IMAGES.group}
                alt="group"
                className=" md:w-full h-[420px]  rounded-xl z-0 brightness-75"
              />
              <p className="absolute top-0 left-0 text-white text-2xl md:w-[25vw] m-7 ">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit{" "}
              </p>
              <div className="rounded-full size-9 sm:size-12 xl:h-20 xl:w-20 border-black border-[2px] flex justify-center items-center z-10 absolute top-5 -right-2 xl:top-0 sm:right-0">
                <img
                  src={ICONS.rightTop}
                  alt="arrow"
                  className="size-5 sm:size-8"
                />
              </div>
            </div>
            <div className="bg-[#4B64E6] mx-2 rounded-xl h-[320px] md:h-[420px] relative overflow-hidden ">
              <p className="text-white text-2xl w-56 m-7 z-30">
                Win freebies as you shop for your little ones
              </p>
              <img
                src={IMAGES.gifts}
                alt="gift"
                className="absolute z-0 top-16 left-[45%] sm:left-[59%] md:left-20 md:top-20 h-[300px] w-[300px] md:h-[380px] md:w-[400px] overflow-hidden"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[33%_33%_33%]">
            <div className="bg-[#F6F6F6] mx-2 h-[220px] rounded-xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-[#888888] text-center mb-5">
                  Shop Under
                </p>
                <p className="text-2xl text-[#888888]">
                  Rs.{" "}
                  <strong className="text-[56px] md:text-5xl lg:text-[80px] text-black font-semibold">
                    1200
                  </strong>
                </p>
              </div>
            </div>
            <div className="bg-[#F6F6F6] mx-2 h-[220px] rounded-xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-[#888888] text-center mb-5">
                  Shop Under
                </p>
                <p className="text-2xl text-[#888888]">
                  Rs.{" "}
                  <strong className="text-[56px] md:text-5xl lg:text-[80px] text-black font-semibold">
                    1600
                  </strong>
                </p>
              </div>
            </div>
            <div className="bg-[#F6F6F6] mx-2 h-[220px] rounded-xl flex justify-center items-center">
              <div>
                <p className="text-2xl text-[#888888] text-center mb-5">
                  Shop Under
                </p>
                <p className="text-2xl text-[#888888]">
                  Rs.{" "}
                  <strong className="text-[56px] md:text-5xl lg:text-[80px] text-black font-semibold">
                    2000
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* new releases */}
        <div>
        <div className="flex justify-between items-center mt-20">
        <p className="text-[#333333] text-2xl sm:text-[40px] font-semibold">
        New Releases
        </p>
        <Link  to={"/all-products"} className="border-[#333333] border-[1px] px-1 sm:px-3 py-[10px] rounded-xl flex items-center justify-center gap-[10px] text-[#333333] text-[10px] sm:text-sm font-semibold leading-6 w-[130px] md:w-[180px]">
          See All Products
          <img src={IMAGES.arrow_black} className="size-3 sm:size-5" />{" "}
        </Link>
      </div>

          <ul className="flex justify-between overflow-x-scroll no-scrollbar my-10">
            <li className="mx-2 relative">
              <div className=" bg-[#F6F6F6] md:bg-[#F8EBDC] w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl flex justify-center items-end">
                <img
                  src={IMAGES.child1}
                  className=" h-[240px] md:h-[300px] object-cover"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p className="mt-3 hidden md:block">Cool Tshirt</p>
              <p className="mt-3 md:hidden">Rs. 1200</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F6F6F6] md:bg-[#F8EBDC] w-[220px] h-[280px] md:w-[340px] md:h-[400px]  rounded-xl flex justify-center items-end">
                <img
                  src={IMAGES.child2}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p className="mt-3 hidden md:block">Cool Tshirt2</p>
              <p className="mt-3 md:hidden">Rs. 1200</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F6F6F6] md:bg-[#F8EBDC] w-[220px] h-[280px] md:w-[340px] md:h-[400px]  rounded-xl flex justify-center items-end">
                <img
                  src={IMAGES.child3}
                  className=" h-[240px] md:h-[300px] object-cover"
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p className="mt-3 hidden md:block">Cool Tshirt3</p>
              <p className="mt-3 md:hidden">Rs. 1200</p>
            </li>
            <li className="mx-2 relative">
              <div className="bg-[#F6F6F6] md:bg-[#F8EBDC] w-[220px] h-[280px] md:w-[340px] md:h-[400px]  rounded-xl flex justify-center items-end">
                <img
                  src={IMAGES.child4}
                  className=" h-[240px] md:h-[300px] object-cover "
                />
              </div>
              <img
                src={IMAGES.heart}
                className="absolute top-3 right-3 hidden md:block"
              />
              <div className="rounded-md bg-white absolute top-3 right-3 md:hidden">
                <img src={IMAGES.plus_black} className="p-3" />
              </div>
              <p className="mt-3 hidden md:block">Cool Tshirt4</p>
              <p className="mt-3 md:hidden">Rs. 1200</p>
            </li>
          </ul>
        </div>

        {/* join the happiness club */}
        <div className="relative">
          <img
            src={IMAGES.group2}
            alt="group2"
            className="w-[95vw] m-auto object-cover h-[500px] md:h-[550px] rounded-xl brightness-50"
          />
          <p className="hidden md:block absolute left-0 top-0 ml-12 mt-8 text-white">
            ONLY FOR YOU AND YOUR KIDS
          </p>
          <p className="hidden md:block absolute right-0 top-0 mr-12 mt-8 text-white">
            200 PRODUCTS TO CHOOSE FROM
          </p>
          <p className="hidden md:block absolute left-0 bottom-0 ml-12 mb-8 text-white text-4xl lg:text-7xl font-semibold w-[30vw]">
            JOIN THE HAPPINESS CLUB
          </p>
          <button className="hidden rounded-lg p-2 text-black md:flex absolute right-0 bottom-0 bg-white mr-12 mb-8">
            Shop now
            <img src={IMAGES.arrow_black} className="mt-1 ml-1" />
          </button>

          {/* for smaller devices */}
          <div className="md:hidden flex flex-col absolute top-0 left-0 justify-between items-center h-full">
            <p className=" text-white mt-4">ONLY FOR YOU AND YOUR KIDS</p>
            <div className="flex flex-col gap-3">
            <p className=" text-white text-5xl lg:text-7xl font-black  m-auto text-center">
              JOIN THE HAPPINESS CLUB
            </p>
            <p className=" text-white text-center">200 PRODUCTS TO CHOOSE FROM</p>
            </div>
            <button className="rounded-lg p-2 text-black flex  bg-white mb-6">
              Shop now
              <img src={IMAGES.arrow_black} className="mt-1 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* happy moments */}
      {/* <HappyMoments /> */}
      {/* footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;