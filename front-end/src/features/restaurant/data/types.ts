// types.ts

export type Restaurant = {
    id: string
    name: string
    location: string
    cuisines: string[]
    rating: number
    image: string
  }
  
  export type MenuItem = {
    id: string
    restaurantId: string
    name: string
    description: string
    price: number
    image: string
    isVeg: boolean
  }
  
  export type CartItem = {
    id: string
    name: string
    quantity: number
    price: number
    image: string
  }
  
  export type User = {
    name: string
    email: string
    avatar?: string
    address?: string
  }
  