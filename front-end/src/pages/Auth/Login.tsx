import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "@/data/dummyData";
import { useAppDispatch } from "@/app/hooks";
import { loginRequest } from "@/features/auth/authSlice";

const KEY_USER = "miniZomUser";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch= useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // find user by email, else pick first user (quick skeleton behavior)
    // let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    // if (!user) {
    //   // fallback - pick first user (or you can create one)
    //   user = users[0];
    // }
    try {
      dispatch(loginRequest({email}))
      // localStorage.setItem(KEY_USER, JSON.stringify(user));
      // navigate("/");
    } catch (error) {
      console.log('error:',error);
    }
  }

  return (
   <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-3">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          // type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
