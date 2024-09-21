
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
    <div className="moments-cont font-Montserrat">
      <h1 className="text-[#1C1D4F] text-2xl lg:text-5xl font-semibold lg:font-medium leading-normal lg:leading-[68px] text-center mt-16">
        Make us a part of your <br /> happy moments
      </h1>
      <p className="text-[#1C1D4F] text-sm lg:text-lg font-medium leading-6 lg:leading-none text-center mt-0 lg:mt-3">
        Post your happy moments and tag us on <span className="text-[#FF6D8B]">@bonhomie_official</span>
      </p>
      <Marquee velocity={50} minScale={0.7} resetAfterTries={200}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="moments" className="moments-carousel-image mt-6" />
        ))}
      </Marquee>
    </div>
  );
}

export default Moments;
