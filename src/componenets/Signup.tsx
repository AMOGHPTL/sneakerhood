import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const adduser = await axios.post("http://localhost:5000/signup", {
      email: email,
      password: password,
    });
    console.log(adduser.data);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-10 m-10 py-10 rounded-md px-5 w-[300px] bg-white">
        <h1 className="text-5xl font-semibold">Signup</h1>
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
          <button
            className="bg-amber-400 p-1 rounded-md cursor-pointer"
            onClick={() => navigate("/login")}
          >
            signup
          </button>
        </form>
        <p>
          Have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
