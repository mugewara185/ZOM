import React from "react";
import { users, orders } from "@/data/dummyData";

const KEY_USER = "miniZomUser";

const ProfilePage: React.FC = () => {
  const stored = localStorage.getItem(KEY_USER);
  const currentUser = stored ? JSON.parse(stored) : users[0];
  const myOrders = orders.filter((o) => o.userId === currentUser.id);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <img src={currentUser.avatar} alt={currentUser.name} className="w-20 h-20 rounded-full object-cover" />
          <div>
            <h2 className="text-xl font-bold">{currentUser.name}</h2>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
            <p className="text-sm text-gray-500">{currentUser.address}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">My Orders</h3>
          {myOrders.length === 0 ? (
            <p className="text-sm text-gray-500 mt-2">No orders yet</p>
          ) : (
            <div className="mt-2 space-y-2">
              {myOrders.map(o => (
                <div key={o.id} className="p-2 border rounded">
                  <div className="text-sm font-medium">Order #{o.id} — ₹{o.total}</div>
                  <div className="text-xs text-gray-500">{o.status} • {new Date(o.createdAt).toLocaleString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
