import { useCallback, useEffect, useState } from "react";
import { IMAGES } from "../../assets";

const ImageCarousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const productImages = [
    IMAGES.child1,
    IMAGES.child2,
    IMAGES.child3,
    IMAGES.child4,
  ];

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === productImages.length - 1 ? 0 : currentSlider + 1
      ),
    [productImages.length]
  );

  // for automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <div className="block md:hidden mt-5">
      <div className="w-full relative overflow-hidden">
        {/* Carousel container */}
        <div
          className="ease-linear duration-500 flex transform-gpu"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {productImages.map((slide, index) => (
            <div
              key={index}
              className="bg-[#F6F6F6] min-w-full  overflow-hidden font-Montserrat relative "
            >
              <img
                key={slide}
                src={slide}
                className="min-w-full h-full w-full object-cover"
                alt={`Slider - ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-50 mt-5 w-full gap-1">
        {productImages.map((img, idx) => (
          <button
            key={`${img}_${idx}`}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-[28px] duration-500 bg-[#5C7DEB] ${
              currentSlider === idx ? "w-8" : "w-2"
            } h-[6px]`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
