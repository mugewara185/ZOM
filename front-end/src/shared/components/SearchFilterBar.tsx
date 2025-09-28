import { useState } from "react";
// import Button from "@/shared/ui/Button";

type Props = {
  onFilter: (query: string, location: string, cuisine: string) => void;
};

export const SearchFilterBar = ({ onFilter }: Props) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(query, location, cuisine);
  };

  return (
    <form
      onSubmit={handleSubmit}
    //   className="flex flex-col sm:flex-row gap-4 mb-6 sticky top-16 z-0 bg-gray-50 p-2 rounded-lg bg-white/20"
      className="flex flex-col sm:flex-row gap-4 mb-6 z-0 bg-gray-50 p-2 rounded-lg bg-white/20"
    >
      <input
        type="text"
        placeholder="Search restaurants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border rounded bg-gray-500"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 px-4 py-2 border rounded bg-white/20"
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
        className="px-4 py-2 border rounded bg-white/20"
      >
        <option value="">All Cuisines</option>
        <option value="South Indian">South Indian</option>
        <option value="North Indian">North Indian</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Biryani">Biryani</option>
        <option value="Desserts">Desserts</option>
      </select>

      <button
        type="submit"
        className="bg-red-600 text-white px-5 py-2 rounded"
      >
        Filter
      </button>
    </form>
  );
};
