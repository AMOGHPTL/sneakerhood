import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./componenets/Banner";
import Navbar from "./componenets/Navbar";
import SneakerList from "./componenets/SneakerList";
import SneakerDisplay from "./pages/SneakerDisplay";
import Footer from "./componenets/Footer";

function App() {
  
  return (
    <div className="bg-[#81D8D0] cursor-default">
      <Navbar/>
      
      <main className=" ">
        <Routes>
          <Route path="/sneakers" element={<><Banner/> <SneakerList/></>}/>
          <Route path="/sneaker" element={<SneakerDisplay/> }/>
          <Route path="*" element={<Navigate to={"/sneakers"}/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
