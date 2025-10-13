import React, { useState, useEffect } from "react";
//datas:
// import { restaurants as allRestaurants } from "@/data/dummyData";
import type{RestaurantState} from "@/features/restaurant/restaurantSlice"
import type { Restaurant } from "@/data/types";
//components:
import {SearchFilterBar}  from "@/shared/components/SearchFilterBar";
import RestaurantCard from "@/features/restaurant/components/RestaurantCard";
import Hero from "./components/Hero";
//others
import { fetchRestaurantsRequest } from "@/features/restaurant/restaurantSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const Home_V = () => {
  const dispatch = useAppDispatch()
  const { items : restaurants , loading, error }: RestaurantState= useAppSelector((state) => state.restaurants)
  const [filtered, setFiltered] = useState(restaurants)

  useEffect(() => {
    try {
      // new Error
      dispatch(fetchRestaurantsRequest());
      
    } catch (error) {
      console.log('error fetching restaurants:', error);
    }
    
  }, [dispatch])
  
  useEffect(() => {
    console.log('Fetched Restuarants...', restaurants)
    setFiltered(restaurants)
  }, [restaurants])

  const handleFilter = (query: string, location: string, cuisine: string) => {
    let filteredData = [...restaurants]
    if (query)
      filteredData = filteredData.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      )
    if (location) filteredData = filteredData.filter((r) => r.location === location)
    if (cuisine) filteredData = filteredData.filter((r) => r.cuisines.includes(cuisine))
    setFiltered(filteredData)
  }

  if (loading) return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-60" />
      ))}
    </div>
  );
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <SearchFilterBar onFilter={handleFilter} />
      <Hero />
      {(filtered.length === 0 && !loading) ? (
        <p className="text-center text-gray-500 mt-10">No restaurants match your filters 😢</p>
      ) :
      (<>
      <h2 className="text-2xl font-bold mb-4">Popular Restaurants</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((rest:Restaurant) => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </div>
        </>
      )
      }
    </div>
  )
}

export default Home_V