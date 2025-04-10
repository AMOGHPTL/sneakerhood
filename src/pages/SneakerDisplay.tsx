import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import Purchase from "../componenets/Purchase";

const sneakerDiplay = () => {
  const sneaker = useSelector((store: Rootstate) => store.sneaker);
  return (
    <div className="grid grid-cols-2 gap-10 p-10">
      <div className="">
        <img src={sneaker.image.original} alt="" className="m-5 rounded-xl" />
      </div>
      <div className="m-5"><Purchase/></div>
    </div>
  );
};

export default sneakerDiplay;
