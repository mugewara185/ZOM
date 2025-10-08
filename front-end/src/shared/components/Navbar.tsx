import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useUI } from "@/app/providers/UIProvider";

const LOCAL_CART_KEY = "miniZomCart";

const Navbar: React.FC = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const {setSideNavOpen} = useUI();

  useEffect(() => {
    function updateCartCount() {
      try {
        const cart = JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
        setCount(cart.reduce((sum: number, item: any) => sum + (item.quantity || 0), 0));
      } catch {
        setCount(0);
      }
    }

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <nav className="bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Navigation Links */}
        <div className="flex items-center gap-6">
          <button
            // onClick={() => navigate("/")}
            onClick={() => setSideNavOpen()}
            className="text-2xl font-bold text-red-600 hover:text-red-700 transition"
          >
            🍽 Mini Zomato
          </button>
          <div className="hidden md:flex items-center gap-4">
            {/* <Link
              to="/"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Home
            </Link>
            <Link
              to="/orders"
              className="text-gray-700 font-medium hover:text-red-600 transition"
            >
              Orders
            </Link> */}
          </div>
        </div>

        {/* Right: Login + Cart */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden sm:inline text-gray-700 font-medium hover:text-red-600 transition"
          >
            Login
          </Link>
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 transition" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-semibold shadow">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
