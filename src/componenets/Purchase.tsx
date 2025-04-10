import { useSelector } from "react-redux";
import { Rootstate } from "../state/store";
import { HeartIcon } from "@heroicons/react/24/outline";


const Purchase = () => {
    const sneaker = useSelector((store: Rootstate) => store.sneaker);
    return ( <div className="bg-white p-10 rounded-xl w-full flex flex-col gap-10">
      <div className="text-gray-500 flex justify-between">
        <p>{sneaker.brand}</p>
        <HeartIcon className="w-6"/>
      </div>
      <div>
        <p className="text-3xl font-semibold">{sneaker.silhouette}</p>
        <p className="text-gray-500">{sneaker.colorway}</p>
        <p className="text-2xl font-bold mt-6">${sneaker.retailPrice}</p>
      </div>
      <div>
        <p>Shoes size (UK)</p>
      </div>
    </div> );
}
 
export default Purchase;