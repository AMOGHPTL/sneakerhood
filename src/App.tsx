import "./App.css";
import Banner from "./componenets/Banner";
import Navbar from "./componenets/Navbar";
import SneakerList from "./componenets/SneakerList";

function App() {
  return (
    <div className="bg-[#81D8D0] cursor-default">
      <Navbar/>
      <Banner/>
      <main className=" max-w-screen-xl mx-auto">
       <SneakerList/>
      </main>
    </div>
  );
}

export default App;
