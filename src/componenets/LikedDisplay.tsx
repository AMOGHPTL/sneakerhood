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

const LikedDisplay = ({likedList,sneakes}:{likedList:Array<string>; sneakes: Array<SneakerState>;}) => {


    return ( <div>

    </div> );
}
 
export default LikedDisplay;