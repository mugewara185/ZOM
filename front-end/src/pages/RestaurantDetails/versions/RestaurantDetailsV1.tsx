import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants, menus, reviews } from "@/data/dummyData";

import { RestaurantHeader } from "@/features/restaurant/components/RestaurantHeader";
import { MenuItemCard } from "@/features/restaurant/components/MenuItemCard";
import type { MenuItem, CartItem } from "@/data/types";
import { logger } from "@/utils/logger";

const LOCAL_CART_KEY = "miniZomCart";

function readCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeCart(cart: CartItem[]) {
  localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cartUpdated"));
}

const RestaurantDetailsV1: React.FC = () => {
    // logger.log('!--------------------------------<RestuarantDetailsV1>--------------------------------!')
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);
  const items = menus.filter((m) => m.restaurantId === id);
  const restaurantReviews = reviews.filter((rv) => rv.restaurantId === id);

  const [cartPreview, setCartPreview] = useState<CartItem[]>(readCart());

  useEffect(() => {
    const handler = () => setCartPreview(readCart());
    window.addEventListener("cartUpdated", handler);
    return () => window.removeEventListener("cartUpdated", handler);
  }, []);

  if (!restaurant) return <div className="p-6">Restaurant not found.</div>;

  function handleAdd(item: MenuItem) {
    const cart = readCart();
    const found = cart.find((c) => c.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        quantity: 1,
        price: item.price,
        image: item.image,
      });
    }
    writeCart(cart);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left / main: header + menu */}
      <div className="lg:col-span-2">
        <RestaurantHeader
          name={restaurant.name}
          image={restaurant.image}
          location={restaurant.location}
          cuisines={restaurant.cuisines}
          rating={restaurant.rating}
        />

        <h2 className="text-xl font-semibold mt-6 mb-4">Menu</h2>
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500">No menu items yet.</p>
          ) : (
            items.map((it) => (
              <MenuItemCard key={it.id} item={it} onAdd={() => handleAdd(it)} />
            ))
          )}
        </div>

        <h3 className="text-lg font-semibold mt-8">Reviews</h3>
        <div className="mt-3 space-y-3">
          {restaurantReviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            restaurantReviews.slice(0, 8).map((rv) => (
              <div key={rv.id} className="p-3 border rounded bg-white">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{rv.userId}</div>
                  <div className="text-yellow-500 font-semibold">{rv.rating.toFixed(1)}</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{rv.comment}</p>
                <div className="text-xs text-gray-400 mt-1">{new Date(rv.createdAt).toLocaleString()}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right: cart preview */}
      <aside className="sticky top-6 self-start">
        <div className="p-4 rounded-lg bg-white border shadow-sm">
          <h4 className="font-semibold">Cart</h4>
          {cartPreview.length === 0 ? (
            <p className="text-sm text-gray-500 mt-3">Your cart is empty.</p>
          ) : (
            <div className="space-y-3 mt-3">
              {cartPreview.map((ci) => (
                <div key={ci.id} className="flex items-center gap-3">
                  <img src={ci.image} alt={ci.name} className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{ci.name}</div>
                    <div className="text-xs text-gray-500">Qty: {ci.quantity}</div>
                  </div>
                  <div className="text-sm font-semibold">₹{ci.price * ci.quantity}</div>
                </div>
              ))}
              <div className="pt-3 border-t flex justify-between items-center">
                <Link to="/cart" className="text-sm bg-red-600 text-white px-3 py-1 rounded">Go to Cart</Link>
                <div className="text-sm font-bold">
                  ₹{cartPreview.reduce((s, i) => s + i.price * i.quantity, 0)}
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default RestaurantDetailsV1;
