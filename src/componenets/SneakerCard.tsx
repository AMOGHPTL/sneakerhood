import { HeartIcon } from "@heroicons/react/24/outline";

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

const SneakerCard = ({sneaker}:{sneaker:sneaker}) => {
    return (  <div className="bg-gray-100 rounded-xl py-5 px-2 m-10 hover:scale-105 transition ease-out duration-200 cursor-pointer shadow-2xl shadow-gray-600 ">
        <div className="flex w-full px-2 justify-between items-center">
          <p className="text-xs text-gray-500">{sneaker.name}</p>
          <HeartIcon className="w-6 hover:fill-red-500 cursor-pointer" />
        </div>
        <div className="w-full flex justify-center">
          <img className="w-60" src={sneaker.image.original} alt="" />
        </div>
        <div className="mx-5">
          <div className="flex w-full justify-between items-center">
            <p className="text-gray-500">{sneaker.brand}</p>
            <p className="text-xs text-gray-500">{sneaker.colorway}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">{sneaker.silhouette}</p>
            <p className="text-2xl font-semibold">${sneaker.retailPrice}</p>
          </div>
        </div>
      </div> );
}
 
export default SneakerCard;