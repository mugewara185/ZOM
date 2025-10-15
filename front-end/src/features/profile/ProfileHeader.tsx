import React from "react";
import { User, Camera } from "lucide-react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-card rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=ZOMUser"
            alt="User Avatar"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <button
            className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full hover:scale-105 transition"
            title="Change avatar"
          >
            <Camera size={16} />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-sm text-muted-foreground">john@example.com</p>
          <button className="text-sm text-primary mt-1 hover:underline">
            <User/>Edit Profile
          </button>
        </div>
      </div>
      <button className="text-sm bg-destructive text-white px-3 py-2 rounded-lg hover:bg-destructive/80">
        Logout
      </button>
    </div>
  );
};

export default ProfileHeader;
