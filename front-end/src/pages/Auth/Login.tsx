import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "@/data/dummyData";

const KEY_USER = "miniZomUser";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // find user by email, else pick first user (quick skeleton behavior)
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      // fallback - pick first user (or you can create one)
      user = users[0];
    }
    localStorage.setItem(KEY_USER, JSON.stringify(user));
    navigate("/");
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login (skeleton)</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-sm">
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email (try one existing from data)"
          className="w-full px-4 py-2 border rounded"
        />
        <button className="w-full bg-red-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
