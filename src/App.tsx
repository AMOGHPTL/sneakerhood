import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./componenets/Banner";
import Navbar from "./componenets/Navbar";
import SneakerList from "./componenets/SneakerList";
import SneakerDisplay from "./pages/SneakerDisplay";
import Footer from "./componenets/Footer";
import LikedPage from "./pages/LikedPage";
import CartPage from "./pages/CartPage";
import Signup from "./componenets/Signup";
import Login from "./componenets/Login";

function App() {
  return (
    <div className="bg-[#81D8D0] cursor-default">
      <Navbar />

      <main className="flex flex-col justify-center">
        <Routes>
          <Route path="*" element={<Navigate to={"/login"} />} />
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route
            path="/sneakers"
            element={
              <>
                <Banner /> <SneakerList />
              </>
            }
          />
          <Route path="/sneaker" element={<SneakerDisplay />} />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/sneakers/:id" element={<SneakerDisplay />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
