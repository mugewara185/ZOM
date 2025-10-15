// src/shared/components/SearchFilterBar.tsx
import { useState } from "react";
// import Button from "@/shared/ui/Button";

type Props = {
  onFilter: (query: string, location: string, cuisine: string) => void;
};

export const SearchFilterBar = ({ onFilter }: Props) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(query, location, cuisine);
    setOpen(false);
  };

  return (
    <div className="mb-6">
        hi
      {/* Toggle button */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-red-600 text-white px-5 py-2 rounded shadow"
      >
        🔍 Filters
      </Button>

      {/* Overlay modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Filter Restaurants</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Search restaurants..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              />

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">All Locations</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
              </select>

              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">All Cuisines</option>
                <option value="South Indian">South Indian</option>
                <option value="North Indian">North Indian</option>
                <option value="Fast Food">Fast Food</option>
                <option value="Biryani">Biryani</option>
                <option value="Desserts">Desserts</option>
              </select>

              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-red-600 text-white px-5 py-2 rounded"
                >
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
