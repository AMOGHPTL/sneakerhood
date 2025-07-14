import { useEffect, useState } from "react";
import CartButton from "../componenets/CartButton";
import { HeartIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import SneakerCard from "../componenets/SneakerCard";

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

const CartPage = ({
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
  const [user, setUser] = useState("");
  const [sneakers, setSneakers] = useState<[SneakerState] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const user = await axios.get("http://localhost:5000/currentUser");
      setUser(user.data.email);
      const sneakers = await axios.get("http://localhost:5000/sneakers");
      setSneakers(sneakers.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {!loading && (
        <div className="p-5 flex flex-col gap-5">
          <p className="text-5xl font-semibold p-10">Item Cart</p>
          {sneakers
            ?.filter((sneaker) => cartList.includes(sneaker._id))
            .map((sneaker) => (
              <SneakerCard cartList={cartList} likedList={likedList} currentUser={currentUser} sneaker={sneaker} />
            ))}
        </div>
      )}
    </>
  );
};

export default CartPage;
