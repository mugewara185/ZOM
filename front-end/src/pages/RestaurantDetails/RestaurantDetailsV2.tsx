import React from "react";
import { Link } from "react-router-dom";
import { RestaurantHeader } from "@/features/restaurant/components/RestaurantHeader";
import { MenuItemCard } from "@/features/restaurant/components/MenuItemCard";
import type { MenuItem } from "@/data/types";
import { useRestaurantDetails } from "@/features/restaurant/hooks/useRestaurantDetails";
import { UIFactory } from "@/features/restaurant/ui/UIFactory";
// import { logger } from "@/utils/logger";

/**
 * RestaurantDetails page using:
 * - RCL: small renderX() functions
 * - Renderer hook: useRestaurantDetails
 * - UI fragments centralized in UIFactory
 */
const RestaurantDetailsV2: React.FC = () => {
// logger.log('!--------------------------------<RestuarantDetailsV2>--------------------------------!')
    
  const {
    restaurant,
    items,
    restaurantReviews,
    cartPreview,
    cartTotal,
    addToCart,
    loading,
  } = useRestaurantDetails();
  // --- RCL: render helpers ------------------------------------------------
  function renderLoading() {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <UIFactory.Loading message="loadiiing..." />
      </div>
    );
  }

  function renderNotFound() {
    return <div className="p-6">Restaurant not found.</div>;
  }

  function renderMenu() {
    return (
      <>
        <h2 className="text-xl font-semibold mt-6 mb-4">Menu</h2>
        <div className="space-y-4">
          {items.length === 0 ? (
            <UIFactory.Empty message="No menu items yet." />
          ) : (
            items.map((it: MenuItem) => (
              <MenuItemCard key={it.id} item={it} onAdd={() => addToCart(it)} />
            ))
          )}
        </div>
      </>
    );
  }

  function renderReviews() {
    return (
      <>
        <h3 className="text-lg font-semibold mt-8">Reviews</h3>
        <div className="mt-3 space-y-3">
          {restaurantReviews.length === 0 ? (
            <UIFactory.Empty message="No reviews yet." />
          ) : (
            restaurantReviews.slice(0, 8).map((rv) => (
              <div key={rv.id} className="p-3 border rounded bg-white">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{rv.userId}</div>
                  <div className="text-yellow-500 font-semibold">{rv.rating.toFixed(1)}</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{rv.comment}</p>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(rv.createdAt).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      </>
    );
  }

  function renderCartPreview() {
    return (
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
                <Link to="/cart" className="text-sm bg-red-600 text-white px-3 py-1 rounded">
                  Go to Cart
                </Link>
                <div className="text-sm font-bold">₹{cartTotal}</div>
              </div>
            </div>
          )}
        </div>
      </aside>
    );
  }

  // --- Main return: composition layer -------------------------------------
  if (loading) {return renderLoading();}
  if (!restaurant) return renderNotFound();

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

        {renderMenu()}

        {renderReviews()}
      </div>

      {/* Right: cart preview */}
      {renderCartPreview()}
    </div>
  );
};

export default RestaurantDetailsV2;
