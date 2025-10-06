import React, { useState, useEffect } from "react";
//datas:
// import { restaurants as allRestaurants } from "@/data/dummyData";
import type{RestaurantState} from "@/features/restaurant/restaurantSlice"
import type { Restaurant } from "@/data/types";
//components:
import {SearchFilterBar}  from "@/shared/components/SearchFilterBar";
import RestaurantCard from "@/features/restaurant/components/RestaurantCard";
import Hero from "./Hero";
//others
import { fetchRestaurantsRequest } from "@/features/restaurant/restaurantSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const Home = () => {
  const dispatch = useAppDispatch()
  const { items : restaurants , loading, error }: RestaurantState= useAppSelector((state) => state.restaurants)
  const [filtered, setFiltered] = useState(restaurants)

  useEffect(() => {
    try {
      dispatch(fetchRestaurantsRequest());
      console.log('Fetched Restuarants...', restaurants)
      
    } catch (error) {
      console.log('error fetching restaurants:', error);
    }

  }, [dispatch])

  useEffect(() => {
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

  if (loading) return <p className="text-center py-10">Loading restaurants...</p>

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <SearchFilterBar onFilter={handleFilter} />
      <Hero />
      <h2 className="text-2xl font-bold mb-4">Popular Restaurants</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((rest:any) => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </div>
    </div>
  )
}

export default Home