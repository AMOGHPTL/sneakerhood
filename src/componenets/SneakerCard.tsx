import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import LikedButton from "./LikedButton";
import { useEffect, useState } from "react";
import axios from "axios";

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
  likedList,
  cartList,
}: {
  sneaker: SneakerState;
  currentUser: string;
  likedList: Array<string>;
  cartList: Array<string>;
}) => {
  const id = sneaker._id;

  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const checkLikedCart = () => {
      setLiked(likedList?.includes(id));
      console.log(likedList, cartList);
      setInCart(cartList?.includes(id));
    };
    checkLikedCart();
  }, []);

  useEffect(() => {
    setLoading(true);
    const handleAddToLiked = async () => {
      if (liked === false) {
        await axios.post("http://localhost:5000/removeFromLiked", {
          id: sneaker?._id,
          user: currentUser,
        });
      } else {
        await axios.post("http://localhost:5000/addToLiked", {
          id: sneaker?._id,
          user: currentUser,
        });
      }
      setLoading(false);
    };
    handleAddToLiked();
  }, [liked]);

 

  useEffect(() => {
    setLoading(true);
    const handleAddToCart = async () => {
      if (inCart === false) {
        await axios.post("http://localhost:5000/removeFromCart", {
          id: sneaker?._id,
          user: currentUser,
        });
      } else {
        await axios.post("http://localhost:5000/addToCart", {
          id: sneaker?._id,
          user: currentUser,
        });
      }
      setLoading(false);
    };
    handleAddToCart();
  }, [inCart]);

   const handleSelected = () => {
    navigate(`/sneakers/${id}`);
  };

  return (
    <>
      {!loading && (
        <div className="bg-gray-100 rounded-xl py-5 px-2 m-10 hover:scale-105 transition ease-out duration-200 cursor-pointer shadow-gray-600 ">
          <div className="flex w-full px-2 justify-between items-center">
            <p className="text-xs text-gray-500">{sneaker.name}</p>
            <LikedButton liked={liked} setLiked={setLiked} />
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
              <CartButton
                inCart={inCart}
                setInCart={setInCart}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SneakerCard;
