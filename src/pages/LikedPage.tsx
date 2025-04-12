import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import sneakersData from "../sneakerData.json";
import { useEffect, useState } from "react";
import CartButton from "../componenets/CartButton";

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
  size: number;
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

const LikedPage = () => {
  const likedlist = useSelector((state: Rootstate) => state.liked.list);
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);
  useEffect(() => {
    setSneakers(sneakersData.results);
  }, []);

  const likedSneakers = sneakers.filter((sneaker)=> likedlist.includes(sneaker.image.original))

  return (
    <div className="p-5 flex flex-col gap-5">
      {likedSneakers.map((sneaker) => (
        <div className="flex w-full justify-between p-5 bg-white rounded-xl">
          <div className="flex gap-5">
            <img src={sneaker.image.original} alt=""  className="h-32"/>
            <div className="flex flex-col justify-around">
            <p className="text-lg text-gray-500">{sneaker.brand}</p>
            <p className="text-3xl font-semibold">{sneaker.name}</p>
            <p className="texxt-sm text-gray-500">{sneaker.colorway}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="text-3xl font-semibold">${sneaker.retailPrice}</p>
            <CartButton/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedPage;
