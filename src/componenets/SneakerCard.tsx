import { HeartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import { assingLike, removeLike } from "../state/slices/likedSlice";

import { selectSneaker } from "../state/slices/sneakerSlice";
import { useNavigate } from "react-router-dom";
import { Rootstate } from "../state/store";
import CartButton from "./CartButton";

interface sneaker {
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
  color?: string;
}

const SneakerCard = ({ sneaker }: { sneaker: sneaker }) => {
  const dispatch = useDispatch();

  const likelist = useSelector((state: Rootstate) => state.liked.list);
  const isLiked = likelist.includes(sneaker.image.original);

  const handleLiked = () => {
    if (!isLiked) {
      // Only increment if going from not liked to liked
      dispatch(assingLike(sneaker));
    } else {
      // Only decrement if going from liked to not liked
      dispatch(removeLike(sneaker));
    }

    // Toggle the liked state after dispatching the action
  };

  const navigate = useNavigate();

  const handleSelected = () => {
    dispatch(selectSneaker(sneaker));
    navigate("/sneaker");
  };

  return (
    <div className="bg-gray-100 rounded-xl py-5 px-2 m-10 hover:scale-105 transition ease-out duration-200 cursor-pointer shadow-gray-600 ">
      <div className="flex w-full px-2 justify-between items-center">
        <p className="text-xs text-gray-500">{sneaker.name}</p>
        <HeartIcon
          className={`${
            isLiked === true && "fill-red-500 text-red-500"
          } w-6 hover:fill-red-500 cursor-pointer hover:text-red-500`}
          onClick={handleLiked}
        />
      </div>
      <div onClick={handleSelected} className="w-full flex justify-center">
        <img className="w-60" src={sneaker.image.original} alt="" />
      </div>
      <div className="mx-5">
        <div className="flex w-full justify-between items-center">
          <p className="text-gray-500">{sneaker.brand}</p>
          <p className="text-xs text-gray-500">{sneaker.colorway}</p>
        </div>
        <div className="flex flex-row gap-2 justify-between items-end">
          <div>
            <p className="text-lg font-semibold">{sneaker.silhouette}</p>
            <p className="text-2xl font-semibold">${sneaker.retailPrice}</p>
          </div>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
