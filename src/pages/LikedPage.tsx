import { useEffect, useState } from "react";
import CartButton from "../componenets/CartButton";
import { HeartIcon } from "@heroicons/react/24/outline";
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

const LikedPage = () => {
  const [user, setUser] = useState("");
  const [likedList, setLikedList] = useState([String]);
  const [sneakers,setSneakers] =  useState<[SneakerState] | null>(
    null
  );

  // const likedSneakers = sneakers?.filter(sneaker => likedList.map(liked => liked.toString()===sneaker._id.toString()));

  useEffect(() => {
    const fetchData = async () => {
      const user = await axios.get("http://localhost:5000/currentUser");
      setUser(user.data.email);
      const userData = await axios.get("http://localhost:5000/currentUserData");
      setLikedList(userData.data.liked);
      const sneakers = await axios.get("http://localhost:5000/sneakers");
      setSneakers(sneakers.data)
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 flex flex-col gap-5">
      {sneakers?.filter(sneaker => likedList.map(liked => liked.toString()===sneaker._id.toString())).map((sneaker) =>  (
        <div className="flex w-full justify-between p-5 bg-white rounded-xl">
          <div className="flex gap-5">
            <img src={sneaker.image} alt="" className="h-32" />
            <div className="flex flex-col justify-around">
              <p className="text-lg text-gray-500">{sneaker.brand}</p>
              <p className="text-3xl font-semibold">{sneaker.name}</p>
              <p className="texxt-sm text-gray-500">{sneaker.colorway}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="text-3xl font-semibold">${sneaker.retailPrice}</p>
            <div className="flex gap-5">
              <HeartIcon
                className={`w-6 text-red-500 cursor-pointer fill-red-500 `}
              />
              <CartButton sneaker={sneaker} user={user} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LikedPage;
