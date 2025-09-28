import type { MenuItem } from "../types";
import { restaurants } from "./restaurants";
import { faker } from "@faker-js/faker";

export const generateMenus = (): MenuItem[] =>
  restaurants.flatMap((rest) =>
    Array.from({ length: 8 }).map((_, i) => ({
      id: `m${rest.id}-${i + 1}`,
      restaurantId: rest.id,
      name: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      price: faker.number.int({ min: 50, max: 500 }),
      image: `/assets/foods/food${(i % 10) + 1}.jpg`,
      isVeg: faker.datatype.boolean(),
    }))
  );

export const menus = generateMenus();
