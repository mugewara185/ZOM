import React, { useState, createContext, useContext } from "react";

type TabsContextType = {
  value: string;
  setValue: (val: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export const Tabs = ({
  defaultValue,
  children,
  className = "",
}: {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex border-b border-gray-200 mb-4 overflow-x-auto ${className}`}
  >
    {children}
  </div>
);

export const TabsTrigger = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be inside Tabs");
  const isActive = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-150 ${
        isActive
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-500 hover:text-blue-500"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({
  value,
  children,
  className = "",
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be inside Tabs");
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
};
