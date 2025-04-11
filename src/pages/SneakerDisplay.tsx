import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import Purchase from "../componenets/Purchase";

const sneakerDiplay = () => {
  const sneaker = useSelector((store: Rootstate) => store.sneaker);
  return (
    <div className="grid grid-cols-2 gap-10 p-10">
      <div className="w-full pl-5 pr-10">
        <img src={sneaker.image.original} alt="" className="m-5 rounded-xl w-full" />
      </div>
      <div className="mr-10 m-5"><Purchase/></div>
    </div>
  );
};

export default sneakerDiplay;
