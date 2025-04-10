import { useEffect, useState } from "react";
import sneakersData from "../sneakerData.json";
import SneakerCard from "./SneakerCard";

interface Sneaker {
  id: string;
  sku: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  releaseDate: string;
  retailPrice: number;
  estimatedMarketValue: number;
  story: string;
  image: {
    original: string;
    small: string;
    thumbnail: string;
  };
  links: {
    stockX: string;
    goat: string;
    flightClub: string;
    stadiumGoods: string;
  };
  color?: string; // Optional since not all entries might have it
}

const SneakerList = () => {
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  useEffect(() => {
    setSneakers(sneakersData.results);
  }, []);

  console.log(sneakers);

  return (
    <div className="w-full grid grid-cols-3">
      <div className="col-span-3 mx-10 mt-10 mt-6">
        <img
          src="https://www.footlocker.sg/media/wysiwyg/NIKE-SG.jpg"
          className="w-full"
          alt=""
        />
      </div>
      {sneakers.slice(0, 3).map((sneaker) => (
        <SneakerCard sneaker={sneaker}/>
      ))}
      <div className="col-span-3 mx-10 mt-20">
        <img
          src="https://www.premieroutlet.hu/fileadmin/user_upload/PO_NB_banner_2390x598.jpg"
          className="w-full"
          alt=""
        />
      </div>
      {sneakers.slice(3, 6).map((sneaker) => (
        <SneakerCard sneaker={sneaker}/>
      ))}
      <div className="col-span-3 mx-10 mt-20">
        <img
          src="https://www.shoeshowmega.com/on/demandware.static/-/Library-Sites-ShoeShowSharedLibrary/default/dwfb6614c0/images/brands/shoeshow/shoe-show-mega-converse-shoes-footwear-socks-accessories-desktop-retina.jpg"
          className="w-full"
          alt=""
        />
      </div>
      {sneakers.slice(6, 9).map((sneaker) => (
        <SneakerCard sneaker={sneaker}/>
      ))}
      <div className="col-span-3 mx-10 mt-20">
        <img
          src="https://www.footlocker.sg/media/wysiwyg/ADIDAS-SG.jpg"
          className="w-full"
          alt=""
        />
      </div>
      {sneakers.slice(9).map((sneaker) => (
        <SneakerCard sneaker={sneaker}/>
      ))}
    </div>
  );
};

export default SneakerList;
