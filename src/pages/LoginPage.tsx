import { useEffect, useState } from "react";
import Login from "../componenets/Login";
import Signup from "../componenets/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [registered, setRegistered] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchCurrentUser = async () => {
      const currentUser = await axios.get("http://localhost:5000/currentUser");
      setCurrentUser(currentUser.data.email);
      console.log(currentUser.data.email);
      if (currentUser.data.email !== "") {
        navigate("/sneakers");
      }
    };
    fetchCurrentUser();
    setLoading(false);
  }, []);

  return (
    <div>
      {!loading && (
        <div>
          {registered ? <Login setRegistered={setRegistered} /> : <Signup />}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
