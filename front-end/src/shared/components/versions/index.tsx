import React, { useState } from "react";
import { Search, MapPin, Utensils } from "lucide-react";

type Props = {
  onFilter: (query: string, location: string, cuisine: string) => void;
};

export const SearchFilterBar: React.FC<Props> = ({ onFilter }) => {
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
      className="sticky top-20 z-30 bg-white/80 backdrop-blur-md shadow-md rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-center gap-4 transition-all"
    >
      {/* Search box */}
      <div className="flex items-center gap-2 w-full sm:w-1/3 border rounded-lg px-3 py-2 bg-white shadow-sm">
        <Search className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search restaurant or dish..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none text-sm bg-transparent"
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 w-full sm:w-1/3 border rounded-lg px-3 py-2 bg-white shadow-sm">
        <MapPin className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 outline-none text-sm bg-transparent"
        />
      </div>

      {/* Cuisine */}
      <div className="flex items-center gap-2 w-full sm:w-1/3 border rounded-lg px-3 py-2 bg-white shadow-sm">
        <Utensils className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Cuisine (e.g. Italian, Chinese)"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="flex-1 outline-none text-sm bg-transparent"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition shadow"
      >
        Search
      </button>
    </form>
  );
};
