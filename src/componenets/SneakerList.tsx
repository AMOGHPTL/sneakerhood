import { useEffect, useState } from "react";
import SneakerCard from "./SneakerCard";
import axios from "axios";

const SneakerList = () => {
  const [sneakes, setSneakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchSneakers = async () => {
      const fetchedSneakers = await axios.get("http://localhost:5000/sneakers");
      setSneakes(fetchedSneakers.data);
      setLoading(false);
    };
    const fetchCU = async () => {
      const currentUser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentUser.data.email);
    };
    fetchCU();
    fetchSneakers();
  }, []);

  console.log(sneakes);

  return (
    <div className="">
      {!loading && (
        <div className="w-full grid grid-cols-3 max-w-screen-xl mx-auto">
          <div className="col-span-3 mx-10 mt-6">
            <img
              src="https://www.footlocker.sg/media/wysiwyg/NIKE-SG.jpg"
              className="w-full"
              alt=""
            />
          </div>
          {sneakes.slice(0, 8).map((sneaker) => (
            <SneakerCard sneaker={sneaker} currentUser={currentUser} />
          ))}
          <div className="col-span-3 mx-10 mt-20">
            <img
              src="https://www.premieroutlet.hu/fileadmin/user_upload/PO_NB_banner_2390x598.jpg"
              className="w-full"
              alt=""
            />
          </div>
          {sneakes.slice(8, 11).map((sneaker) => (
            <SneakerCard sneaker={sneaker} currentUser={currentUser} />
          ))}
          <div className="col-span-3 mx-10 mt-20">
            <img
              src="https://www.shoeshowmega.com/on/demandware.static/-/Library-Sites-ShoeShowSharedLibrary/default/dwfb6614c0/images/brands/shoeshow/shoe-show-mega-converse-shoes-footwear-socks-accessories-desktop-retina.jpg"
              className="w-full"
              alt=""
            />
          </div>
          {sneakes.slice(11, 14).map((sneaker) => (
            <SneakerCard sneaker={sneaker} currentUser={currentUser} />
          ))}
          <div className="col-span-3 mx-10 mt-20">
            <img
              src="https://www.footlocker.sg/media/wysiwyg/ADIDAS-SG.jpg"
              className="w-full"
              alt=""
            />
          </div>
          {sneakes.slice(14).map((sneaker) => (
            <SneakerCard sneaker={sneaker} currentUser={currentUser} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SneakerList;
