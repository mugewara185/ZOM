import type{ RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Profile from "@/pages/Profile";
import RestaurantDetails  from "@/pages/RestaurantDetails";
import OrdersPage from "@/pages/Orders";
import Login from "@/pages/Auth/Login";

// import type { JSX } from "react";

export type AppRoute = RouteObject & { //*Concept: type intersection
  roles?: string[];
};

export const routes: AppRoute[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login/> },
      { path: "restaurant/:id", element: <RestaurantDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
      { path: "orders", element: <OrdersPage /> },
    ],
  },
];
