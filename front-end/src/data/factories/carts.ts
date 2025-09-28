import type { Cart } from "../types";
import { users } from "./users";
import { menus } from "./menus";

export const generateCarts = (): Cart[] =>
  users.map((u, i) => {
    const items = menus.slice(i * 2, i * 2 + 3).map((m) => ({
      id: m.id,
      name: m.name,
      quantity: 1,
      price: m.price,
      image: m.image,
    }));

    return {
      id: `c${i + 1}`,
      userId: u.id,
      items,
      total: items.reduce((acc, it) => acc + it.price * it.quantity, 0),
    };
  });

export const carts = generateCarts();
