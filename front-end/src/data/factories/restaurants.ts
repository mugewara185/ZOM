import type { Restaurant } from "../types";
import { restaurantNames } from "../seeds/restaurantNames";
import {cuisinesList} from '../seeds/cuisines'
import {locations} from '../seeds/locations'

// const locations = ['Chennai', 'Mumbai', 'Bangalore', 'Delhi', 'Kolkata'];
// const cuisinesList = [
//   ['South Indian', 'Veg'],
//   ['Chinese', 'Non-Veg'],
//   ['North Indian'],
//   ['Fast Food', 'Biryani'],
//   ['Desserts', 'Cafe'],
// ];

export const generateRestaurants = (count = 60): Restaurant[] =>
  Array.from({ length: count }).map((_, i) => ({
    id: `r${i + 1}`,
    name: restaurantNames[i % restaurantNames.length],
    location: locations[i % locations.length],
    cuisines: cuisinesList[i % cuisinesList.length],
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    image: `/assets/restaurants/restaurant${(i % 10) + 1}.jpg`,
  }));

export const restaurants = generateRestaurants();
