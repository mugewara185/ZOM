import React from "react";

/**
 * Minimal UIFactory: centralized small fragments (Empty, Loading, Skeletons).
 * Expand later with skeleton components, placeholders, and consistent spacing.
 */

export const UIFactory = {
  Empty({ message = "No data." }: { message?: string }) {
    return <p className="text-gray-500">{message}</p>;
  },

  Loading({ message = "Loading..." }: { message?: string }) {
    return <div className="text-gray-500">{message}</div>;
  },

  // Simple skeleton factory (n placeholders)
  SkeletonList({ count = 4 }: { count?: number }) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-100 rounded h-12" />
        ))}
      </div>
    );
  },
};
