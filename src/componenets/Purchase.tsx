import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { decerement, increament } from "../state/slices/likedSlice";
import { addtoCart, removeFromCart } from "../state/slices/cartItemsSlice";

const Purchase = () => {
  //state
  const [showAbout,setShowAbout] = useState(false);
  const [showDetails,setShowDetails] = useState(false);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  
  const dispatch = useDispatch();


    const handleLiked = () => {
      if (!liked) {
        // Only increment if going from not liked to liked
        dispatch(increament());
      } else {
        // Only decrement if going from liked to not liked
        dispatch(decerement());
      }
  
      // Toggle the liked state after dispatching the action
      setLiked(!liked);
    };
  
    const handleAddToCart = () => {
      if (!added) {
        // Only increment if going from not liked to liked
        dispatch(addtoCart());
      } else {
        // Only decrement if going from liked to not liked
        dispatch(removeFromCart());
      }
      // Toggle the liked state after dispatching the action
      setAdded(!added);
    };

  const sneaker = useSelector((store: Rootstate) => store.sneaker);
  return (
    <div className="bg-white p-10 rounded-xl w-full flex flex-col gap-5">
      <div className="text-gray-500 flex justify-between">
        <p>{sneaker.brand}</p>
        <HeartIcon className={`w-6 ${liked&&"fill-red-500 text-red-500"} hover:fill-red-500 hover:text-red-500 cursor-pointer`} onClick={handleLiked}/>
      </div>
      <div>
        <p className="text-3xl font-semibold">{sneaker.silhouette}</p>
        <p className="text-gray-500">{sneaker.colorway}</p>
        <p className="text-2xl font-bold mt-6">${sneaker.retailPrice}</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Shoes size (UK)</p>
        <div className="border-1 w-fit px-3 py-1 bg-gray-300">
          <p>{sneaker.size}</p>
        </div>
      </div>
      <div className="bg-black text-white text-center py-2 text-lg my-5 mt-16 cursor-pointer" onClick={handleAddToCart}>
        {!added?<p>Add to cart</p>:<p>Remove from cart</p>}
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <div className="border-b-1 px-3 py-2 items-center flex w-full justify-between">
          <p>About the product</p>
          <PlusIcon className={`w-6 cursor-pointer ${showAbout&&"rotate-90"} transition duration-200`} onClick={()=>setShowAbout(!showAbout)}/>
        </div>
        {showAbout&& <div className="px-3 py-2">
          <p className="text-lg font-semibold mb-3">The Unheard story</p>
          {sneaker.story}
          </div>}
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-b-1 px-3 py-2 items-center flex w-full justify-between">
          <p>Product details</p>
          <PlusIcon className={`w-6 cursor-pointer ${showDetails&&"rotate-90"} transition duration-200`} onClick={()=>setShowDetails(!showDetails)}/>
        </div>
        {showDetails&& <div className="px-3 py-2 flex flex-col gap-1">
          <p className="text-lg font-semibold mb-3">Product details</p>
          <p>Name: {sneaker.name}</p>
          <p>gender: {sneaker.gender}</p>
          <p>color: {sneaker.colorway}</p>
          <p>Year: {sneaker.releaseYear}</p>
          </div>}
      </div>
    </div>
  );
};

export default Purchase;
