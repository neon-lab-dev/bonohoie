import { IMAGES } from "../../assets";
import Marquee from "react-marquee-slider";
import { useGetAllProductsQuery } from "../../redux/Features/Products/productApi";
import Hero from "../../components/Hero/Hero";

export const Home = () => {
  const {data:products} = useGetAllProductsQuery();
  console.log(products);
  return (
    <>
      <div className="mx-3 overflow-x-hidden md:mx-10">
        {/* <div className="">
          <div className=" relative md:opacity-100 md:mx-0">
            <img
              src={IMAGES.hero}
              alt="hero"
              className="h-[550px] md:h-[640px] object-cover md:w-full rounded-2xl brightness-50"
            />
            <img
              src={IMAGES.bonhomie_yellow}
              alt="bonhomie_yellow"
              className="absolute bottom-10 w-full "
            />
            <div className="hidden md:block absolute top-0 left-0 ml-8 mt-6">
              <div className="flex">
                <img src={IMAGES.star_yellow} alt="star_yellow" className="" />
                <p className="text-white">4.5</p>
              </div>
              <p className="text-white mt-8 w-[200px] ">
                Both kids and their happy parents love us
              </p>
            </div>
            <div className="absolute top-1/3 md:top-0 md:right-0 md:w-[300px] m-6">
              <p className="text-white text-sm font- mb-4 ">
                Supplying your child with the prettiest, coziest clothes
                possible at the most affordable prices.
              </p>
              <div className="flex justify-center gap-2">
                <button className="border-white border-2 rounded-lg p-2 text-white">
                  2023 collection
                </button>
                <button className="bg-white/50 rounded-lg p-2 text-white flex">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="flex justify-between m-4 ">
              <p className="text-[#391811] font-semibold ">2024</p>
              <p className="text-[#391811] font-semibold ">PREMIUM KIDS WEAR</p>
            </div>
          </div>
        </div> */}
        <Hero/>

        {/* latest arrivals starts here */}
        <div>
          <div className="flex justify-between mb-5 mt-20">
            <p className="text-[#333333] text-2xl md:text-5xl font-semibold md:font-normal">
              Latest Arrivals
            </p>
            <button className="border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333]">
              See All Products{" "}
              <img src={IMAGES.arrow_black} className="mt-1 ml-1" />{" "}
            </button>
          </div>

          <ul className="flex justify-between overflow-x-scroll no-scrollbar mb-10">
            <li className="mx-1 relative">
              <div className="bg-[#F8EBDC] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
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
            <li className="mx-1 relative">
              <div className="bg-[#F8EBDC] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
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
            <li className="mx-1 relative">
              <div className="bg-[#F8EBDC] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
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
            <li className="mx-1 relative">
              <div className="bg-[#F8EBDC] flex items-end justify-center w-[220px] h-[280px] md:w-[340px] md:h-[400px] rounded-xl">
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

        {/* why are we loved starts here */}
        <div>
          <div className="bg-[#F6F6F6] md:bg-white ">
            <div className="flex flex-col md:flex-row py-8 px-5">
              <p className="text-[#333333] w-[40vw] font-semibold mb-5">Why are we loved</p>
              <div>
                <p className="text-2xl md:text-5xl font-medium md:leading-[68px]">
                  Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio{" "}
                </p>
                <div>
                  <p>+200 happy children</p>
                </div>
              </div>
            </div>

          </div>
          {/* for smaller devices */}
          <div className="mt-10 md:hidden">
            <div className="h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative">
              <img src={IMAGES.infant} alt="child1" className="brightness-50" />
              <div className="flex absolute bottom-10 justify-between px-6 w-full">
                <div>
                  <p className="text-white">Infants</p>
                  <p className="text-white">00-02 yrs</p>
                </div>
                <button className="border-white border-2 rounded-lg p-2 text-white flex bg-white/40">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative">
              <img
                src={IMAGES.girls2}
                alt="child1"
                className="h-[240px] object-cover brightness-50 w-full"
              />
              <div className="flex absolute bottom-10 justify-between px-6 w-full">
                <div>
                  <p className="text-white">Girls</p>
                  <p className="text-white">03-08 yrs</p>
                </div>
                <button className="border-white border-2 rounded-lg p-2 text-white flex bg-white/40">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="h-[240px] overflow-hidden mx-4 rounded-3xl mb-4 relative">
              <img src={IMAGES.boys1} alt="child1" className="brightness-50" />
              <div className="flex absolute bottom-10 justify-between px-6 w-full">
                <div>
                  <p className="text-white">Boys</p>
                  <p className="text-white">03-08 yrs</p>
                </div>
                <button className="border-white border-2 rounded-lg p-2 text-white flex bg-white/40">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="bg-[#F82456] h-[200px] overflow-hidden mx-4 rounded-3xl mb-4 relative">
              <img src={IMAGES.best_deals} alt="best" className=" absolute bottom-0 right-0" />
              <p className="text-white text-xl m-6 ">
                Find the <strong className="italic">best deals</strong> on
                comfortable child co-ord sets for your little ones.
              </p>
              <button className="border-white border-2 rounded-lg p-2 text-white flex m-6">
                Shop now
                <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
              </button>
            </div>

            
          </div>

          {/* for medium and higher devices */}
          <div className="md:mt-10 hidden md:grid md:grid-cols-[25%_25%_50%] md:h-[500px] lg:h-[570px] mb-7">
            <div className="h-full md:h-[500px] lg:h-[570px] overflow-hidden mx-2 lg:mx-4 rounded-3xl mb-4 relative">
              <img
                src={IMAGES.boys1}
                alt="child1"
                className="h-full object-cover brightness-50"
              />
              <div className=" lg:flex absolute bottom-10 justify-between px-6 w-full">
                <div>
                  <p className="text-white text-4xl">Boys</p>
                  <p className="text-white text-xl">03-08 yrs</p>
                </div>
                <button className="border-none rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
            <div className="h-full md:h-[500px] lg:h-[570px] grid grid-rows-[60%_40%] justify-between">
              <div className="bg-[#F82456] h-[90%] overflow-hidden mx-2 lg:mx-4 rounded-3xl mb-4 relative">
              <img src={IMAGES.best_deals} alt="best" className=" absolute bottom-0 right-0" />
                <p className="text-white lg:text-xl m-6 mt-9">
                  Find the <strong className="italic">best deals</strong> on
                  comfortable child co-ord sets for your little ones.
                </p>
                <button className="border-white border-2 rounded-xl py-2 lg:p-4 text-white flex m-6">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
              <div className="h-full overflow-hidden mx-2 lg:mx-4 rounded-3xl mb-4 relative">
                <img
                  src={IMAGES.infant}
                  alt="child1"
                  className="h-full w-full brightness-50"
                />
                <div className="absolute bottom-10 justify-between px-6 w-full">
                  <div>
                    <p className="text-white text-4xl">Infants</p>
                    <p className="text-white text-xl">00-02 yrs</p>
                  </div>
                  <button className="border-none rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5">
                    Shop now
                    <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="h-full md:h-[500px] lg:h-[570px] overflow-hidden mx-2 lg:mx-4 rounded-3xl mb-4 relative">
              <img
                src={IMAGES.girls1}
                alt="child1"
                className="h-full object-cover w-full brightness-50"
              />
              <div className="flex absolute bottom-10 justify-between px-6 w-full">
                <div>
                  <p className="text-white text-4xl">Girls</p>
                  <p className="text-white text-xl">03-08 yrs</p>
                </div>
                <button className="border-none rounded-xl py-2 lg:p-4 text-white flex bg-white/40 mt-5">
                  Shop now
                  <img src={IMAGES.arrow_white} className="mt-1 ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full overflow-hidden my-10">
              <Marquee
                velocity={25}
                minScale={0.7}
                resetAfterTries={200}
                scatterRandomly={false}
              >
                <div className="flex justify-center items-center">
                  <span className="text-[42px] mx-4 font-medium">
                    Affordable luxury and comfort
                  </span>
                  <img
                    src={IMAGES.star_pink}
                    alt="icon-1"
                    className="h-14 mx-4"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-[42px] mx-4 font-medium">Spreading Joy and comfort</span>
                  <img
                    src={IMAGES.star_home}
                    alt="icon-2"
                    className="h-14 mx-4 mt-3"
                  />
                </div>
                
              </Marquee>
            </div>
        </div>

        {/* bestsellers starts here */}
        <div className="hidden md:block">
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
                  src={IMAGES.child1_s}
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
                  src={IMAGES.child2_s}
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
                  src={IMAGES.child3_s}
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
                  src={IMAGES.child3_s}
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
                  src={IMAGES.child1_s}
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
                  src={IMAGES.child2_s}
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
        <div className="md:hidden mb-20">
          <div className="flex justify-between mb-5">
            <p className="text-[#333333] text-2xl md:text-5xl font-semibold">
              Summer Essentials
            </p>
            <button className="border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333]">
              See All Products{" "}
              <img src={IMAGES.arrow_black} className="mt-1 ml-1" />{" "}
            </button>
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
            <div className="mx-2 relative object-cover mb-6">
              <img
                src={IMAGES.group}
                alt="group"
                className=" md:w-full h-[350px] lg:h-[450px]  rounded-xl z-0 brightness-75"
              />
              <p className="absolute top-0 left-0 text-white text-2xl md:w-[25vw] m-7 ">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit{" "}
              </p>
              <div className="rounded-full h-12 w-12 xl:h-20 xl:w-20 border-black border-[2px] flex justify-center items-center z-10 absolute top-5 -right-2 xl:top-0 sm:right-0">
                <img
                  src={IMAGES.arrow_black}
                  alt="arrow"
                  className="w-10 h-10"
                />
              </div>
            </div>
            <div className="bg-[#4B64E6] mx-2 rounded-xl min-h-[300px] h-[350px] lg:h-[450px] relative overflow-hidden ">
              <p className="text-white text-2xl w-48 m-7">
                Win freebies as you shop for your little ones
              </p>
              <img
                src={IMAGES.gift}
                alt="gift"
                className="absolute top-16 left-[45%] sm:left-[59%] md:left-20 md:top-20 h-[300px] w-[300px] md:h-[380px] md:w-[400px] overflow-hidden"
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
          <div className="flex justify-between mt-20 md:mt-32 mb-5">
            <p className="text-[#333333] text-2xl md:text-5xl mb-5 font-normal ">
              New Releases
            </p>
            <button className="border-[#333333] border-[1px] p-2 rounded-xl flex text-[#333333]">
              See All Products{" "}
              <img src={IMAGES.arrow_black} className="mt-1 ml-1" />{" "}
            </button>
          </div>

          <ul className="flex justify-between overflow-x-scroll no-scrollbar mb-20">
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
          <p className="hidden md:block absolute left-0 bottom-0 ml-12 mb-8 text-white text-4xl lg:text-7xl font-black w-[30vw]">
            JOIN THE HAPPINESS CLUB
          </p>
          <button className="hidden rounded-lg p-2 text-black md:flex absolute right-0 bottom-0 bg-white mr-12 mb-8">
            Shop now
            <img src={IMAGES.arrow_black} className="mt-1 ml-1" />
          </button>

          {/* for smaller devices */}
          <div className="md:hidden flex flex-col absolute top-0 left-0 justify-between items-center h-full">
            <p className=" text-white mt-4">ONLY FOR YOU AND YOUR KIDS</p>
            <p className=" text-white text-5xl lg:text-7xl font-black  m-auto text-center">
              JOIN THE HAPPINESS CLUB
            </p>
            <p className=" text-white">200 PRODUCTS TO CHOOSE FROM</p>
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