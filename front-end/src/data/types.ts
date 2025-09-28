export type Restaurant = {
  id: string;
  name: string;
  location: string;
  cuisines: string[];
  rating: number;
  image: string;
};

export type MenuItem = {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
};

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  address?: string;
};

export type Order = {
  id: string;
  userId: string;
  restaurantId: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
};

export type Review = {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number;
  comment: string;
  createdAt: string;
};
