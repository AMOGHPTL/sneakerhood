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

const sneakerDiplay = () => {
  const [sneaker, setSneaker] = useState<SneakerState | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchSneaker = async () => {
      const sneaker = await axios.get(`http://localhost:5000/sneaker/${id}`);
      setSneaker(sneaker.data);
      setLoading(false);
    };
    const fetchCU = async () => {
      const currentUser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentUser.data.email);
    };
    fetchCU();
    fetchSneaker();
  }, []);

  return (
    <div>
      {!loading && (
        <div className="grid grid-cols-2 gap-10 p-10">
          <div className="w-full pl-5 pr-10">
            <img src={sneaker?.image} alt="" className="m-5 rounded-xl w-full" />
          </div>
          <div className="mr-10 m-5">
            <Purchase sneaker={sneaker} currentUser={currentUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default sneakerDiplay;
