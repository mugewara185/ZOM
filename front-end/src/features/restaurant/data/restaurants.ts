import type{ Restaurant } from "./types"
import { restaurantNames } from "./dummyData"

export const restaurants: Restaurant[]= Array.from({length:60}).map((_, i)=>({
    id: `r${i + 1}`,
    // name: `Food Plaza ${i + 1}`,
    name: restaurantNames[i],
    location: ['Chennai', 'Mumbai', 'Bangalore', 'Delhi', 'Kolkata'][i % 5],
    cuisines: [
      ['South Indian', 'Veg'],
      ['Chinese', 'Non-Veg'],
      ['North Indian'],
      ['Fast Food', 'Biryani'],
      ['Desserts', 'Cafe'],
    ][i % 5],
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // 3.0–5.0
    image: `../src/assets/restaurants/restaurant${(i % 10) + 1}.jpg`, 
}))

