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
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [sneakes, setSneakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [likedList, setLikedList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchSneakers = async () => {
      const fetchedSneakers = await axios.get("http://localhost:5000/sneakers");
      setSneakes(fetchedSneakers.data);
    };
    const fetchCU = async () => {
      const currentUser = await axios.get("http://localhost:5000/currentUser");
      const likedList = await axios.post("http://localhost:5000/getLiked", {
        userEmail: currentUser.data.email,
      });
      console.log(currentUser.data.email);
      setLikedList(likedList?.data.liked);
      setCartList(likedList?.data.cart);
      setCurrentUser(currentUser.data.email);
      setLoading(false);
    };
    fetchCU();
    fetchSneakers();
  }, []);

  return (
    <>
      {!loading && (
        <div className="bg-[#81D8D0] cursor-default">
          <Navbar sneakes={sneakes} likedList={likedList} cartList={cartList} />

          <main className="flex flex-col justify-center">
            <Routes>
              <Route
                path="*"
                element={
                  currentUser === "" ? (
                    <Navigate to={"/login"} />
                  ) : (
                    <Navigate to={"/sneakers"} />
                  )
                }
              />
              <Route
                path="/"
                element={
                  currentUser === "" ? (
                    <Navigate to={"/login"} />
                  ) : (
                    <Navigate to={"/sneakers"} />
                  )
                }
              />
              <Route
                path="/sneakers"
                element={
                  <>
                    <Banner />{" "}
                    <SneakerList
                      sneakes={sneakes}
                      cartList={cartList}
                      currentUser={currentUser}
                      likedList={likedList}
                    />
                  </>
                }
              />
              <Route
                path="/sneaker"
                element={
                  <SneakerDisplay cartList={cartList} likedList={likedList} />
                }
              />
              <Route
                path="/liked"
                element={
                  <LikedPage
                    cartList={cartList}
                    currentUser={currentUser}
                    likedList={likedList}
                    sneaker={sneakes}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <CartPage
                    cartList={cartList}
                    currentUser={currentUser}
                    likedList={likedList}
                    sneaker={sneakes}
                  />
                }
              />

              <Route
                path="/sneakers/:id"
                element={
                  <SneakerDisplay cartList={cartList} likedList={likedList} />
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
