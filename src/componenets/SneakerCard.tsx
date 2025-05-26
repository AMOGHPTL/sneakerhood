import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import LikedButton from "./LikedButton";

interface SneakerState {
  _id: string;
  id: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  retailPrice: number;
  size: number;
  story: string;
  image: string;
}

const SneakerCard = ({
  sneaker,
  currentUser,
}: {
  sneaker: SneakerState;
  currentUser: string;
}) => {
  const id = sneaker._id;

  const navigate = useNavigate();

  const handleSelected = () => {
    navigate(`/sneakers/${id}`);
  };

  return (
    <div className="bg-gray-100 rounded-xl py-5 px-2 m-10 hover:scale-105 transition ease-out duration-200 cursor-pointer shadow-gray-600 ">
      <div className="flex w-full px-2 justify-between items-center">
        <p className="text-xs text-gray-500">{sneaker.name}</p>
        <LikedButton sneaker={sneaker} user={currentUser} />
      </div>
      <div className="w-full flex justify-center">
        <img
          className="w-60"
          src={sneaker.image}
          alt=""
          onClick={handleSelected}
        />
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
          <CartButton sneaker={sneaker} user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
