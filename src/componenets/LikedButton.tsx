import { HeartIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

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

const LikedButton = ({

  liked,
  setLiked,
}: {

  liked: boolean;
  setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAddToLiked = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return (
    <div>
      <HeartIcon
        className={`w-6 text-black cursor-pointer ${
          !liked ? "fill-white" : "fill-red-600"
        }`}
        onClick={handleAddToLiked}
      >
        <p>{!liked ? "Add to cart" : "Remove"}</p>
      </HeartIcon>
    </div>
  );
};

export default LikedButton;
