import React from "react";
import Marquee from "react-marquee-slider";
import './Moments.css';
import moments1 from "../../assets/images/moments1.jpeg";
import moments2 from "../../assets/images/moments2.jpeg";
import moments3 from "../../assets/images/moments3.jpeg";
import moments4 from "../../assets/images/moments4.jpeg";
import moments5 from "../../assets/images/moments5.jpeg";

function Moments() {
  const images = [moments1, moments2, moments3, moments4, moments5];

  return (
    <div className="moments-cont">
      <h1 className="moments-heading">
        Make us a part of your <br /> happy moments
      </h1>
      <p className="moments-desc">
        Post your happy moments and tag us on <span>@bonhomie_official</span>
      </p>
      <Marquee velocity={50} minScale={0.7} resetAfterTries={200}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="moments" className="moments-carousel-image" />
        ))}
      </Marquee>
    </div>
  );
}

export default Moments;
