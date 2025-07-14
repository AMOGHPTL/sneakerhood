import axios from "axios";
import { useEffect, useState } from "react";

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

const CartButton = ({
  inCart,
  setInCart,
}: {
  inCart: boolean;
  setInCart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAddToCart = () => {
    if (inCart) {
      setInCart(false);
    } else {
      setInCart(true);
    }
  };

  return (
    <div>
      <div
        className={`text-xl font-semibold text-white text-center cursor-pointer ${
          !inCart ? "bg-amber-400" : "bg-red-600"
        } rounded-sm px-3 p-2`}
        onClick={handleAddToCart}
      >
        <p>{!inCart ? "Add to cart" : "Remove"}</p>
      </div>
    </div>
  );
};

export default CartButton;
