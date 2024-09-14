import React from "react";
import "./Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CustomCarousel({
  images = [
    {
      src: "https://via.placeholder.com/150",
      alt: "Placeholder Image",
    },
  ],
  setImages = () => {},
  deviceType,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={deviceType}
      className="carousel"
      additionalTransfrom={0}
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      {images.map((image, index) => (
        <div className="carousel-item" key={index}>
          <span
            className={image.fav ? "heart selected" : "heart"}
            onClick={() => {
              const newImages = [...images];
              newImages[index].fav = !newImages[index].fav;
              setImages(newImages);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16663 7.31394C4.33896 6.75511 4.64764 6.23003 5.12101 5.7607C5.49372 5.39118 5.88053 5.14748 6.26864 5M11.3339 3.45494C12.7286 2.57021 14.981 1.7336 16.9262 3.71726C21.5437 8.42614 13.6251 17.5 9.99998 17.5C6.37486 17.5 -1.54378 8.42614 3.07373 3.71726C5.01889 1.73362 7.27132 2.57022 8.66604 3.45494C9.45411 3.95485 10.5458 3.95485 11.3339 3.45494Z"
                stroke="#333333"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <img src={image.src} alt={image.alt} />
          <p className="item-text">{image.alt}</p>
        </div>
      ))}
    </Carousel>
  );
}