import { HeartIcon } from "@heroicons/react/24/outline";
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

const LikedButton = ({ user, sneaker }: { user: string; sneaker: SneakerState | null}) => {
  const [inLiked, setInLiked] = useState(Boolean);
  const [loading, setLoading] = useState(true);

  const handleAddToLiked = async () => {
    setTimeout(() => {}, 3000);
    if (inLiked === false) {
      await axios.post("http://localhost:5000/addToLiked", {
        id: sneaker?._id,
        user: user,
      });
      setInLiked(true);
    } else {
      await axios.post("http://localhost:5000/removeFromLiked", {
        id: sneaker?._id,
        user: user,
      });
      setInLiked(false);
    }
    // Toggle the liked state after dispatching the action
  };

  useEffect(() => {
    setLoading(true);
    const checking = async () => {
      const check = await axios.post("http://localhost:5000/checkInLiked", {
        id: sneaker?._id,
        user: user,
      });
      const addedToCart = check.data;
      setInLiked(addedToCart);
      setLoading(false);
    };
    checking();
  }, []);

  return (
    <div>
      {!loading && (
        <HeartIcon
          className={`w-6 text-black cursor-pointer ${
            !inLiked ? "fill-white" : "fill-red-600"
          }`}
          onClick={handleAddToLiked}
        >
          <p>{!inLiked ? "Add to cart" : "Remove"}</p>
        </HeartIcon>
      )}
    </div>
  );
};

export default LikedButton;
