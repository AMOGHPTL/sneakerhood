import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../state/slices/cartItemsSlice";
import { Rootstate } from "../state/store";

interface SneakerState {
  id: string;
  sku: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: string;
  releaseDate: string;
  retailPrice: number;
  size: number;
  estimatedMarketValue: number;
  story: string;
  image: {
    original: string;
    small: string;
    thumbnail: string;
  };
  links: {
    stockX: string;
    goat: string;
    flightClub: string;
    stadiumGoods: string;
  };
  color?: string;
}

const CartButton = ({sneaker}:{sneaker:SneakerState}) => {

const cartItem  = useSelector((store:Rootstate)=> store.cartItems.list);
const addedToCart = cartItem.includes(sneaker.image.original);

const dispatch = useDispatch();

     const handleAddToCart = () => {
        if (!addedToCart) {
          // Only increment if going from not liked to liked
          dispatch(addToCart(sneaker));
        } else {
          // Only decrement if going from liked to not liked
          dispatch(removeFromCart(sneaker));
        }
        // Toggle the liked state after dispatching the action
      };
    return ( <div
        className={`text-xl font-semibold text-white text-center cursor-pointer ${
          !addedToCart ? "bg-amber-400" : "bg-red-600"
        } rounded-sm px-3 p-2`}
        onClick={handleAddToCart}
      >
        <p>{!addedToCart ? "Add to cart" : "Remove"}</p>
      </div> );
}
 
export default CartButton;