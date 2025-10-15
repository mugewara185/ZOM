import React from "react";
import { users, orders } from "@/data/dummyData";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/Tabs";
import { User, MapPin, ShoppingBag } from "lucide-react";
import SettingsSection from "@/features/profile/SettingsSection";

const KEY_USER = "miniZomUser";

const ProfilePage: React.FC = () => {
  const stored = localStorage.getItem(KEY_USER);
  const currentUser = stored ? JSON.parse(stored) : users[0];
  const myOrders = orders.filter((o) => o.userId === currentUser.id);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <Tabs defaultValue="overview" className="space-y-6">
        {/* Tabs header */}
        <TabsList className="grid w-full grid-cols-2 bg-muted/30 rounded-xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Section */}
        <TabsContent value="overview">
          <div className="bg-card p-6 rounded-2xl shadow-sm space-y-8">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-20 h-20 rounded-full object-cover border"
              />
              <div>
                <h2 className="text-xl font-semibold">{currentUser.name}</h2>
                <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <MapPin size={14} className="mr-1" />
                  {currentUser.address}
                </div>
              </div>
            </div>

            {/* Order Stats */}
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <ShoppingBag size={16} /> My Orders
              </h3>

              {myOrders.length === 0 ? (
                <p className="text-sm text-muted-foreground mt-2">No orders yet</p>
              ) : (
                <div className="mt-3 space-y-2">
                  {myOrders.map((o) => (
                    <div
                      key={o.id}
                      className="p-3 border rounded-lg hover:bg-muted/50 transition"
                    >
                      <div className="text-sm font-medium">
                        Order #{o.id} — ₹{o.total}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {o.status} • {new Date(o.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Settings Section */}
        <TabsContent value="settings">
          <SettingsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
