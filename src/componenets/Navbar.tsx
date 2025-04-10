import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoBlack-removebg-preview.png"
import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";

const Navbar = () => {
 
  const count = useSelector((state:Rootstate) => state.liked.value)

    return ( <div className="w-full text-black bg-[#81D8D0] px-10 py-1 flex justify-between border-b-1 border-b-black">
      <div className="flex items-center font-bold gap-1 cursor-pointer">
        <span className="text-2xl text-black">Sneakerhood</span>
        <img src={logo} alt="" className="w-18"/>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="cursor-pointer"><UserIcon className="w-8"/></div>
        <div className="cursor-pointer relative"><HeartIcon className="w-8"/>
        <p className="absolute top-[-4px] right-[-6px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">{count}</p></div>
        <div className="cursor-pointer relative"><ShoppingCartIcon className="w-8"/>
        <p className="absolute top-[-4px] right-[-8px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">0</p></div>
      </div>
    </div> );
}
 
export default Navbar;