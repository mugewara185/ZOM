// src/pages/Home/index.tsx
import { useState, useMemo } from "react";
import { restaurants as allRestaurants } from "@/features/restaurant/data/restaurants";
import {SearchFilterBar}  from "@/shared/components/SearchFilterBar";
import RestaurantCard from "@/features/restaurant/components/RestaurantCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [flatScroll, setFlatScroll] = useState(true);

  // 🔥 Filtering logic with useMemo (performance + Redux-ready later)
  const filtered = useMemo(() => {
    return allRestaurants.filter((r) => {
      const matchQuery = r.name.toLowerCase().includes(query.toLowerCase());
      const matchLocation = location ? r.location === location : true;
      const matchCuisine = cuisine
        ? r.cuisines.includes(cuisine)
        : true;
      return matchQuery && matchLocation && matchCuisine;
    });
  }, [query, location, cuisine]);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Filters */}
      <SearchFilterBar
        onFilter={(q, l, c) => {
          setQuery(q);
          setLocation(l);
          setCuisine(c);
        }}
      />

      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-4">Popular Restaurants</h2>

      {/* Scroll / Grid view */}
      <div className="border overflow-y-scroll overflow-x-auto scroll-smooth mb-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No restaurants found.</p>
        ) : (
          <div
            className={
              flatScroll
                ? "flex gap-2 whitespace-nowrap"
                : "grid my-2 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            <button
              onClick={() => setFlatScroll(!flatScroll)}
              className="m-4 p-4 py-2 bg-gray-500/10 text-white rounded hover:bg-blue-600"
            >
              {flatScroll ? "V" : ">"}
            </button>

            {filtered.map((rest) => (
              <div
                key={rest.id}
                className="border border-green-400/50 inline-block m-4 min-w-50"
              >
                <RestaurantCard {...rest} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* placeholder bottom section */}
      <div className="mt-5 min-h-40 bg-gray-800"></div>
    </div>
  );
};

export default Home;
