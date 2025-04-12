import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sneakerData from "../sneakerData.json"
import { useDispatch } from "react-redux";
import { selectSneaker } from "../state/slices/sneakerSlice";
import { useNavigate } from "react-router-dom";


const Banner = () => {

  const nike  = sneakerData.results.filter((sneaker)=> sneaker.name==="Nike Air Force 1 '07 'Triple White'")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleNike = () => {
    dispatch(selectSneaker(nike[0]))
    navigate("/sneaker")
  }

  const handleAdidas = () => {
    dispatch(selectSneaker((sneakerData.results.filter((sneaker)=> sneaker.name==="adidas superstar green"))[0]))
    navigate("/sneaker")
  }

  const handleNB = () => {
    dispatch(selectSneaker((sneakerData.results.filter((sneaker)=> sneaker.name==="new balance 370"))[0]))
    navigate("/sneaker")
  }

  const handleConverse = () => {
    dispatch(selectSneaker((sneakerData.results.filter((sneaker)=> sneaker.name==="converse chuck 70"))[0]))
    navigate("/sneaker")
  }

  return (
    <div className="relative">
      <Carousel
        className="cursor-pointer"
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div onClick={handleNike}>
          <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/NIKE_Air-Force-1-_07-Texture.jpg?v=1742284721"
            alt=""
          />
        </div>
        <div onClick={handleAdidas}>
        <img
            loading="lazy"
            src="https://www.superkicks.in/cdn/shop/files/adidas-OrignalsXBAPE.jpg?v=1744009551"
            alt=""
          />
        </div>
        <div onClick={handleNB}>
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
        <div onClick={handleConverse}>
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
