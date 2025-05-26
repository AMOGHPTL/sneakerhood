import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../state/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(Boolean);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInvalid(false);
    const loginUser = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    console.log(loginUser.data);
    if (!loginUser.data[0]) {
      setInvalid(true);
    } else {
      dispatch(selectUser(loginUser.data[0]));
      await axios.post("http://localhost:5000/setCurrentuser", {
        email: email,
      });
      navigate("/sneakers");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 m-10 py-10 rounded-md px-5 w-[300px] bg-white">
        <h1 className="text-5xl font-semibold">Login</h1>
        {invalid && <p className="text-red-500">* user not found</p>}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label htmlFor="name">Email</label>
          <input
            className="border-1 p-1 rounded-md"
            name="name"
            type="email"
            placeholder="xyz@abc.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="border-1 p-1 rounded-md"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-amber-400 p-1 rounded-md cursor-pointer">Login</button>
        </form>
        <p>
          Have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
