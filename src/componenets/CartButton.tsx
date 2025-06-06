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
  user,
  sneaker,
}: {
  user: string;
  sneaker: SneakerState | null;
}) => {
  const [inCart, setInCart] = useState(Boolean);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = async () => {
    setTimeout(() => {}, 3000);
    if (inCart === false) {
      await axios.post("http://localhost:5000/addToCart", {
        id: sneaker?._id,
        user: user,
      });
      setInCart(true);
    } else {
      await axios.post("http://localhost:5000/removeFromCart", {
        id: sneaker?._id,
        user: user,
      });
      setInCart(false);
    }
    // Toggle the liked state after dispatching the action
  };

  useEffect(() => {
    setLoading(true);
    const checking = async () => {
      const check = await axios.post("http://localhost:5000/checkInCart", {
        id: sneaker?._id,
        user: user,
      });
      const addedToCart = check.data;
      setInCart(addedToCart);
      setLoading(false);
    };
    checking();
  }, []);

  return (
    <div>
      {!loading && (
        <div
          className={`text-xl font-semibold text-white text-center cursor-pointer ${
            !inCart ? "bg-amber-400" : "bg-red-600"
          } rounded-sm px-3 p-2`}
          onClick={handleAddToCart}
        >
          <p>{!inCart ? "Add to cart" : "Remove"}</p>
        </div>
      )}
    </div>
  );
};

export default CartButton;
