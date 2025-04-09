import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        className=""
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/NIKE_Air-Force-1-_07-Texture.jpg?v=1742284721"
            alt=""
          />
        </div>
        <div>
        <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/adidas-OrignalsXBAPE.jpg?v=1744009551"
            alt=""
          />
        </div>
        <div>
        <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/NB_370.jpg?v=1744182631"
            alt=""
          />
        </div>
        <div>
        <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/PUMA-ROAD-TO-UNITY-PALERMO-LEATHER.jpg?v=1744009777"
            alt=""
          />
        </div>
        <div>
        <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/CHUCK-70.jpg?v=1744182629"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;  
