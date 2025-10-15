import React from "react";

const ProfileInfoCard: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-semibold">Account Information</h3>
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground">Phone</p>
          <p>+91 9876543210</p>
        </div>
        <div>
          <p className="text-muted-foreground">Member since</p>
          <p>Jan 2025</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
