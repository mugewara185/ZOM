import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";

const LOCAL_CART_KEY = "miniZomCart";

const Navbar: React.FC = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    function update() {
      try {
        const cart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
        setCount(cart.reduce((s: any, it: any) => s + (it.quantity || 0), 0));
      } catch {
        setCount(0);
      }
    }
    update();
    window.addEventListener("cartUpdated", update);
    return () => window.removeEventListener("cartUpdated", update);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate("/")} className="text-lg font-bold text-red-600">🍽 Mini Zomato</button>
        <Link to="/" className="hidden md:inline">Home</Link>
        <Link to="/orders" className="hidden md:inline">Orders</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="hidden sm:inline">Login</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
            {count}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
