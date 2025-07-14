import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logoBlack-removebg-preview.png";
import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LikedDisplay from "./LikedDisplay";

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

const Navbar = ({
  likedList,
  cartList,
  sneakes
}: {
  likedList: Array<string>;
  cartList: Array<string>;
  sneakes: Array<SneakerState>;
}) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  // const [liked,setLiked] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchCurrentUser = async () => {
      const currentuser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentuser.data.email);
      // const liked  = await axios.post("http://localhost:5000/getLiked" , currentuser);
      // setLiked(liked.data)
      setLoading(false);
    };
    fetchCurrentUser();
  }, []);

  const likecount = useSelector((state: Rootstate) => state.liked.list.length);
  const cartcount = useSelector(
    (state: Rootstate) => state.cartItems.list.length
  );

  const handlelike = () => {
    if (likedList.length != 0) {
      navigate("/liked");
    }
  };

  const handleCart = () => {
    if (cartList.length != 0) {
      navigate("/cart");
    }
  };

  const handleLogout = async () => {
    const logedOut = await axios.delete(
      "http://localhost:5000/removeCurrentuser"
    );
    console.log(logedOut.data);
    navigate("/login");
  };

  useEffect(() => {
    setLoading(true);
    const fetchCurrentUser = async () => {
      const currentuser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentuser.data.email);
      setLoading(false);
    };
    fetchCurrentUser();
  }, [handleLogout]);

  return (
    <div className="w-full text-black bg-[#81D8D0] px-10 py-1 flex justify-between border-b-1 border-b-black">
      <div
        className="flex items-center font-bold gap-1 cursor-pointer"
        onClick={() => navigate("*")}
      >
        <span className="text-2xl text-black">Sneakerhood</span>
        <img src={logo} alt="" className="w-18" />
      </div>
      <div className="flex justify-center items-center gap-16 mr-10 ">
        {!loading && currentUser && (
          <p className="relative top-1">Hello, {currentUser}</p>
        )}
        <div className="cursor-pointer relative" onClick={handleLogout}>
          <UserIcon className="w-8" />
          <p className="absolute top-2 right-[-50px]">Logout</p>
        </div>
        <div className="cursor-pointer relative">
          <HeartIcon className="w-8" onClick={handlelike} />
          <p className="absolute top-[-4px] right-[-6px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">
            {likedList.length}
          </p>
          <p className="absolute top-2 right-[-40px]">Liked</p>
        </div>
        <div className="cursor-pointer relative">
          <ShoppingCartIcon className="w-8" onClick={handleCart} />
          <p className="absolute top-[-4px] right-[-8px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">
            {cartList.length}
          </p>
          <p className="absolute top-2 right-[-35px]">Cart</p>
        </div>
      </div>
      {/* <div>
        <LikedDisplay likedList={likedList} sneakes={sneakes}/>
      </div> */}
    </div>
  );
};

export default Navbar;
