import { faker } from "@faker-js/faker";
import type { Order } from "../types";
import { users } from "./users";
import { restaurants } from "./restaurants";
import { menus } from "./menus";

export const generateOrders = (count = 20): Order[] =>
  Array.from({ length: count }).map((_, i) => {
    const user = users[i % users.length];
    const restaurant = restaurants[i % restaurants.length];
    const items = menus.slice(i, i + 2);

    return {
      id: `o${i + 1}`,
      userId: user.id,
      restaurantId: restaurant.id,
      items: items.map((m) => ({
        name: m.name,
        quantity: 1,
        price: m.price,
      })),
      total: items.reduce((sum, it) => sum + it.price, 0),
      status: faker.helpers.arrayElement(["pending", "completed", "cancelled"]),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    };
  });

export const orders = generateOrders();
