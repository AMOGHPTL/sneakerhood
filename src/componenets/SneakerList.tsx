import SneakerCard from "./SneakerCard";

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

const SneakerList = ({
  sneakes,
  currentUser,
  likedList,
  cartList,
}: {
  sneakes: Array<SneakerState>;
  currentUser: string;
  likedList: Array<string>;
  cartList: Array<string>;
}) => {
  return (
    <div className="">
      <div className="w-full grid grid-cols-3 max-w-screen-xl mx-auto">
        <div className="col-span-3 mx-10 mt-6">
          <img
            src="https://www.footlocker.sg/media/wysiwyg/NIKE-SG.jpg"
            className="w-full"
            alt=""
          />
        </div>
        {sneakes.slice(0, 8).map((sneaker) => (
          <SneakerCard
            likedList={likedList}
            cartList={cartList}
            sneaker={sneaker}
            currentUser={currentUser}
          />
        ))}
        <div className="col-span-3 mx-10 mt-20">
          <img
            src="https://www.premieroutlet.hu/fileadmin/user_upload/PO_NB_banner_2390x598.jpg"
            className="w-full"
            alt=""
          />
        </div>
        {sneakes.slice(8, 11).map((sneaker) => (
          <SneakerCard
            likedList={likedList}
            cartList={cartList}
            sneaker={sneaker}
            currentUser={currentUser}
          />
        ))}
        <div className="col-span-3 mx-10 mt-20">
          <img
            src="https://www.shoeshowmega.com/on/demandware.static/-/Library-Sites-ShoeShowSharedLibrary/default/dwfb6614c0/images/brands/shoeshow/shoe-show-mega-converse-shoes-footwear-socks-accessories-desktop-retina.jpg"
            className="w-full"
            alt=""
          />
        </div>
        {sneakes.slice(11, 14).map((sneaker) => (
          <SneakerCard
            likedList={likedList}
            cartList={cartList}
            sneaker={sneaker}
            currentUser={currentUser}
          />
        ))}
        <div className="col-span-3 mx-10 mt-20">
          <img
            src="https://www.footlocker.sg/media/wysiwyg/ADIDAS-SG.jpg"
            className="w-full"
            alt=""
          />
        </div>
        {sneakes.slice(14,17).map((sneaker) => (
          <SneakerCard
            likedList={likedList}
            cartList={cartList}
            sneaker={sneaker}
            currentUser={currentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default SneakerList;
