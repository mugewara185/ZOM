import React from "react";
import { orders, restaurants, users } from "@/data/dummyData";
import { Link } from "react-router-dom";

const OrdersPage: React.FC = () => {
  const all = orders; // show all orders for skeleton
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="space-y-4">
        {all.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          all.map((o) => {
            const rest = restaurants.find((r) => r.id === o.restaurantId);
            const user = users.find((u) => u.id === o.userId);
            return (
              <div key={o.id} className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{rest?.name ?? "Unknown Restaurant"}</div>
                    <div className="text-sm text-gray-500">{user?.name ?? o.userId}</div>
                    <div className="text-xs text-gray-400">#{o.id} • {new Date(o.createdAt).toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">₹{o.total}</div>
                    <div className="text-sm mt-1">{o.status}</div>
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  <strong>Items:</strong>
                  <ul className="list-disc list-inside">
                    {o.items.map((it, i) => (
                      <li key={i}>{it.name} x{it.quantity} — ₹{it.price}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link to={`/restaurant/${o.restaurantId}`} className="text-sm text-blue-600">View restaurant</Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
