import React from "react";

const SettingsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-card rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Here you’ll be able to customize your app appearance, preferences,
          notifications, and account settings.
        </p>
      </section>
    </div>
  );
};

export default SettingsSection;
