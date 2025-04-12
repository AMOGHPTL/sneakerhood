import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../state/slices/cartItemsSlice";

const CartButton = () => {
const [added, setAdded] = useState(false);

const dispatch = useDispatch();

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
    return ( <div
        className={`text-xl font-semibold text-white text-center cursor-pointer ${
          !added ? "bg-amber-400" : "bg-red-600"
        } rounded-sm px-3 p-2`}
        onClick={handleAddToCart}
      >
        <p>{!added ? "Add to cart" : "Remove"}</p>
      </div> );
}
 
export default CartButton;