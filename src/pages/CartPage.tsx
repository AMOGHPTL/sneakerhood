import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import sneakersData from "../sneakerData.json";
import { useEffect, useState } from "react";
import CartButton from "../componenets/CartButton";
import { useNavigate } from "react-router-dom";

interface Sneaker {
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
  color?: string; // Optional since not all entries might have it
}

const CartPage = () => {
  const cartlist = useSelector((state: Rootstate) => state.cartItems.list);
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);

  useEffect(() => {
    setSneakers(sneakersData.results);
  }, []);

  const cartSneakers = sneakers.filter((sneaker) =>
    cartlist.includes(sneaker.image.original)
  );

  const isInCart = cartSneakers.map((sneaker) =>
    cartSneakers.includes(sneaker)
  );

  const navigate = useNavigate();

  if (cartlist.length === 0) {
    navigate("*");
  }

  let total = 0;
  cartSneakers.map((sneaker) => (total += sneaker.retailPrice));

  return (
    <div className="p-5 grid grid-cols-2 gap-5">
      <div className="col-span-1 flex flex-col gap-5">
        {cartSneakers.map((sneaker) => (
          <div className="flex w-full justify-between p-5 bg-white rounded-xl">
            <div className="flex gap-5">
              <img src={sneaker.image.original} alt="" className="h-32" />
              <div className="flex flex-col justify-around">
                <p className="text-lg text-gray-500">{sneaker.brand}</p>
                <p className="text-3xl font-semibold">{sneaker.name}</p>
                <p className="texxt-sm text-gray-500">{sneaker.colorway}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <p className="text-3xl font-semibold">${sneaker.retailPrice}</p>
              <div className="flex gap-5">
                {isInCart && <CartButton sneaker={sneaker} />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-5 col-span-1 w-full bg-white rounded-xl flex flex-col justify-between">
        <div>
        <p className="text-3xl font-semibold">Items in cart</p>
        <div className="py-5 border-b-1">
          {cartSneakers.map((sneaker) => (
            <div className="flex w-full justify-between font-semibold text-gray-500">
              <p>{sneaker.name}</p>
              <p>${sneaker.retailPrice}</p>
            </div>
          ))}
         
        </div>
        <div className="flex justify-between mt-5 text-2xl font-semibold">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
          <div className="">
            <p className="bg-yellow-500 text-center py-2 text-2xl font-semibold">Checkout</p>
            <p className="text-sm text-gray-500">powered by stripe</p>
          </div>
      </div>
    </div>
  );
};

export default CartPage;
