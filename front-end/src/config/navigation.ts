import { Home, ListOrdered, ShoppingCart, User } from "lucide-react";

export const navLinks = [
  { id: "home", label: "Home", path: "/", icon: Home },
  { id: "profile", label: "Profile", path: "/profile", icon: User },
  { id: "orders", label: "Order", path: "/orders", icon: ListOrdered },
  { id: "cart", label: "Cart", path: "/cart", icon: ShoppingCart },
];
