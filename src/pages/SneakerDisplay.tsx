import Purchase from "../componenets/Purchase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

const sneakerDiplay = ({likedList,cartList}:{likedList:Array<string>; cartList:Array<string>}) => {
  // const id = sneaker._id;

  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [loading, setLoading] = useState(true);

    const [sneaker, setSneaker] = useState<SneakerState | null>(null);
  const [currentUser, setCurrentUser] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchSneaker = async () => {
      const sneaker = await axios.get(`http://localhost:5000/sneaker/${id}`);
      setSneaker(sneaker.data);
       setLiked(likedList?.includes(sneaker.data._id));
      console.log(likedList, cartList);
      setInCart(cartList?.includes(sneaker.data._id));
      
    };
    const fetchCU = async () => {
      const currentUser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentUser.data.email);
      setLoading(false);
    };
    fetchCU();
    fetchSneaker();
  }, []);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    setLoading(true);
    const handleAddToLiked = async () => {
      if (liked === false) {
        await axios.post("http://localhost:5000/removeFromLiked", {
          id: sneaker?._id,
          user: currentUser,
        });
      } else {
        await axios.post("http://localhost:5000/addToLiked", {
          id: sneaker?._id,
          user: currentUser,
        });
      }
      setLoading(false);
    };
    handleAddToLiked();
  }, [liked]);

 

  useEffect(() => {
    setLoading(true);
    const handleAddToCart = async () => {
      if (inCart === false) {
        await axios.post("http://localhost:5000/removeFromCart", {
          id: sneaker?._id,
          user: currentUser,
        });
      } else {
        await axios.post("http://localhost:5000/addToCart", {
          id: sneaker?._id,
          user: currentUser,
        });
      }
      setLoading(false);
    };
    handleAddToCart();
  }, [inCart]);


  return (
    <div>
      {!loading && (
        <div className="grid grid-cols-2 gap-10 p-10">
          <div className="w-full pl-5 pr-10">
            <img src={sneaker?.image} alt="" className="m-5 rounded-xl w-full" />
          </div>
          <div className="mr-10 m-5">
            <Purchase liked={liked} setLiked={setLiked} inCart={inCart} setInCart={setInCart} sneaker={sneaker} currentUser={currentUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default sneakerDiplay;
