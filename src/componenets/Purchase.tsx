import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { assingLike, removeLike } from "../state/slices/likedSlice";
import CartButton from "./CartButton";

const Purchase = () => {
  //state
  const [showAbout,setShowAbout] = useState(false);
  const [showDetails,setShowDetails] = useState(false);

  
  const dispatch = useDispatch();

  


    const handleLiked = () => {
      if (!isLiked) {
        // Only increment if going from not liked to liked
        dispatch(assingLike(sneaker));
      } else {
        // Only decrement if going from liked to not liked
        dispatch(removeLike(sneaker));
      }
  
      // Toggle the liked state after dispatching the action

    };
  

  const sneaker = useSelector((store: Rootstate) => store.sneaker);

  const likelist = useSelector((state:Rootstate) => state.liked.list)
  const isLiked  = likelist.includes(sneaker.image.original)

  return (
    <div className="bg-white p-10 rounded-xl w-full flex flex-col gap-5">
      <div className="text-gray-500 flex justify-between">
        <p>{sneaker.brand}</p>
        <HeartIcon className={`w-6 ${isLiked&&"fill-red-500 text-red-500"} hover:fill-red-500 hover:text-red-500 cursor-pointer`} onClick={handleLiked}/>
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
      <div className="my-5 mt-16">
      <CartButton/>
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
