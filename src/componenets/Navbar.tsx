import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logoBlack-removebg-preview.png"
import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
 
  const likecount = useSelector((state:Rootstate) => state.liked.list.length)
  const cartcount = useSelector((state:Rootstate) =>state.cartItems.list.length)

  const handlelike = () => {
    if(likecount!=0){
      navigate("/liked")
    }
  }

  const handleCart = () => {
    if(cartcount!=0){
      navigate("/cart")
    }
  }

    return ( <div className="w-full text-black bg-[#81D8D0] px-10 py-1 flex justify-between border-b-1 border-b-black">
      <div className="flex items-center font-bold gap-1 cursor-pointer" onClick={()=>navigate("*")}>
        <span className="text-2xl text-black">Sneakerhood</span>
        <img src={logo} alt="" className="w-18"/>
      </div>
      <div className="flex justify-center items-center gap-16 mr-10 ">
        <div className="cursor-pointer relative"><UserIcon className="w-8"/><p className="absolute top-2 right-[-30px]">user</p></div>
        <div className="cursor-pointer relative"><HeartIcon className="w-8" onClick={handlelike}/>
        <p className="absolute top-[-4px] right-[-6px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">{likecount}</p><p className="absolute top-2 right-[-40px]">Liked</p></div>
        <div className="cursor-pointer relative"><ShoppingCartIcon className="w-8" onClick={handleCart}/>
        <p className="absolute top-[-4px] right-[-8px] bg-black text-white font-semibold border-[2px] border-black rounded-full text-xs px-1">{cartcount}</p><p className="absolute top-2 right-[-35px]">Cart</p></div>
      </div>
    </div> );
}
 
export default Navbar;