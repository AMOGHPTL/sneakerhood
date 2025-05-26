import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
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

const Purchase = ({
  sneaker,
  currentUser,
}: {
  sneaker: SneakerState | null;
  currentUser: string;
}) => {
  //state
  const [showAbout, setShowAbout] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white p-10 rounded-xl w-full flex flex-col gap-5">
      <div className="text-gray-500 flex justify-between">
        <p>{sneaker?.brand}</p>
        <LikedButton sneaker={sneaker} user={currentUser} />
      </div>
      <div>
        <p className="text-3xl font-semibold">{sneaker?.silhouette}</p>
        <p className="text-gray-500">{sneaker?.colorway}</p>
        <p className="text-2xl font-bold mt-6">${sneaker?.retailPrice}</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Shoes size (UK)</p>
        <div className="border-1 w-fit px-3 py-1 bg-gray-300">
          <p>{sneaker?.size}</p>
        </div>
      </div>
      <div className="my-5 mt-16">
        <CartButton sneaker={sneaker} user={currentUser} />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <div className="border-b-1 px-3 py-2 items-center flex w-full justify-between">
          <p>About the product</p>
          <PlusIcon
            className={`w-6 cursor-pointer ${
              showAbout && "rotate-90"
            } transition duration-200`}
            onClick={() => setShowAbout(!showAbout)}
          />
        </div>
        {showAbout && (
          <div className="px-3 py-2">
            <p className="text-lg font-semibold mb-3">The Unheard story</p>
            {sneaker?.story}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-b-1 px-3 py-2 items-center flex w-full justify-between">
          <p>Product details</p>
          <PlusIcon
            className={`w-6 cursor-pointer ${
              showDetails && "rotate-90"
            } transition duration-200`}
            onClick={() => setShowDetails(!showDetails)}
          />
        </div>
        {showDetails && (
          <div className="px-3 py-2 flex flex-col gap-1">
            <p className="text-lg font-semibold mb-3">Product details</p>
            <p>Name: {sneaker?.name}</p>
            <p>gender: {sneaker?.gender}</p>
            <p>color: {sneaker?.colorway}</p>
            <p>Year: {sneaker?.releaseYear}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
